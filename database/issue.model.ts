import { Schema, model, models, Document } from 'mongoose';

export interface IIssue extends Document {
  title: string;
  slug: string;
  description: string;
  location: string;
  category: 'infrastructure' | 'security' | 'academic' | 'health';
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  reporter: Schema.Types.ObjectId;
  images?: string[];
}

const IssueSchema = new Schema<IIssue>(
  {
    title: { type: String, required: true, maxlength: 100 },
    slug: { type: String, unique: true, lowercase: true },
    description: { type: String, required: true, maxlength: 2000 },
    location: { type: String, required: true }, // e.g., "Block G, Room 4"
    category: {
      type: String,
      enum: ['infrastructure', 'security', 'academic', 'health'],
      required: true,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    status: {
      type: String,
      enum: ['open', 'in-progress', 'resolved', 'closed'],
      default: 'open',
    },
    reporter: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    images: [{ type: String }],
  },
  { timestamps: true }
);

// Pre-save hook for Slug (Hand-written logic)
IssueSchema.pre('save', function (next) {
  if (this.isModified('title') || this.isNew) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }
  next();
});

const Issue = models.Issue || model<IIssue>('Issue', IssueSchema);
export default Issue;
