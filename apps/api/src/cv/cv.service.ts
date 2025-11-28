/**
 * CvService
 *
 * Service for retrieving CV PDF files from AWS S3.
 * - Initializes S3 client using environment variables.
 * - Provides method to fetch the CV as a readable stream.
 * - Throws an error if the file is not found or unreadable.
 *
 * Environment variables required:
 *   AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_S3_BUCKET, AWS_S3_CV_KEY
 */
import { Injectable } from '@nestjs/common';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

@Injectable()
export class CvService {
  private s3: S3Client;
  private bucket: string;
  private key: string;

  /**
   * Initializes the S3 client and sets bucket/key from environment variables.
   */
  constructor() {
    this.s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      },
    });
    this.bucket = process.env.AWS_S3_BUCKET || '';
    this.key = process.env.AWS_S3_CV_KEY || 'cv.pdf';
  }

  /**
   * Fetches the CV PDF file from S3 as a readable stream.
   * @returns NodeJS.ReadableStream of the PDF file
   * @throws Error if the file is not found or not readable
   */
  async getCvPdf(): Promise<NodeJS.ReadableStream> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: this.key,
    });
    const response = await this.s3.send(command);
    if (!response.Body || !(response.Body instanceof Readable)) {
      throw new Error('CV file not found or not readable');
    }
    return response.Body as NodeJS.ReadableStream;
  }
}
