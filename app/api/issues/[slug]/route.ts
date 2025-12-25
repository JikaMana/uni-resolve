import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Issue from '@/database/issue.model';
import User from '@/database/user.model';

// Define route params type for type safety
type RouteParams = {
  params: Promise<{
    slug: string;
  }>;
};

/* GET /api/issues/[slug] - Fetches a single issue by its slug for the University Resolve system */
export async function GET(
  req: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    await connectDB();

    const { slug } = await params;

    // Validate slug parameter
    if (!slug || typeof slug !== 'string' || slug.trim() === '') {
      return NextResponse.json(
        { message: 'Invalid or missing slug parameter' },
        { status: 400 }
      );
    }

    // Sanitize slug
    const sanitizedSlug = slug.trim().toLowerCase();

    // Query issue by slug
    // .populate('reporter', 'name email') so you know WHO reported it
    const issue = await Issue.findOne({ slug: sanitizedSlug })
      //   .populate('reporter', 'name email')
      .lean();

    // Handle issue not found
    if (!issue) {
      return NextResponse.json(
        { message: `Issue with slug '${sanitizedSlug}' not found` },
        { status: 404 }
      );
    }

    //  Return successful response
    return NextResponse.json(
      { message: 'Issue fetched successfully', issue },
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching issue by slug:', error);
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Failed to fetch issue', error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
