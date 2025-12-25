import { Schema, model, models, Document } from 'mongoose';

export interface IResolution extends Document {
  issueId: Schema.Types.ObjectId;
  resolvedBy: Schema.Types.ObjectId;
  comment: string;
  actionTaken: string;
}

const ResolutionSchema = new Schema<IResolution>(
  {
    issueId: {
      type: Schema.Types.ObjectId,
      ref: 'Issue',
      required: true,
      unique: true, // One resolution per issue
    },
    resolvedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true }, // Note to the student
    actionTaken: { type: String }, // Internal note for management
  },
  { timestamps: true }
);

// Index for fast lookup of resolutions by issue
// ResolutionSchema.index({ issueId: 1 });

const Resolution =
  models.Resolution || model<IResolution>('Resolution', ResolutionSchema);
export default Resolution;
