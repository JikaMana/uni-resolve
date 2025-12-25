import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

import { Issue } from '@/database';
import connectDB from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const formData = await req.formData();

    // 1. Get the file and upload to Cloudinary
    const file = formData.get('image') as File;
    if (!file)
      return NextResponse.json(
        { message: 'Image is required' },
        { status: 400 }
      );

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { resource_type: 'image', folder: 'UniResolve' },
            (error, result) => {
              if (error) return reject(error);
              resolve(result as { secure_url: string });
            }
          )
          .end(buffer);
      }
    );

    // 2. Build the object manually to ensure types are correct
    const issueData = {
      title: formData.get('title'),
      description: formData.get('description'),
      location: formData.get('location'),
      category: formData.get('category'),
      priority: formData.get('priority'),
      reporter: formData.get('reporter'), // This links to your User ID
      image: uploadResult.secure_url,
    };

    const createdIssue = await Issue.create(issueData);

    return NextResponse.json(
      { message: 'Issue created successfully', issue: createdIssue },
      { status: 201 }
    );
  } catch (e: unknown) {
    console.error(e);

    return NextResponse.json(
      {
        message: 'Error',
        error: e instanceof Error ? e.message : 'An unknown error occurred',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const issues = await Issue.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { message: 'Issue fetched successfully', issues },
      { status: 200 }
    );
  } catch (e) {
    console.error('Error fetching issues:', e);
    return NextResponse.json(
      {
        message: 'Issue fetching failed',
        error: e instanceof Error ? e.message : 'An unknown error occurred',
      },
      { status: 500 }
    );
  }
}
