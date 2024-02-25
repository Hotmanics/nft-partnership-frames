import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
    return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          {
            label: "Continue"
          }
        ],
        image: {
          src: `${NEXT_PUBLIC_URL}/screenshotThree.png`,
        },
        postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
      }),
    );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';