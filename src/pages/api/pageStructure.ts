// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { aboutStructure, homeStructure } from './__mocks__/structures';

type Data = {
  data: {
    structure: {
      key: {
        id: string;
        namespace: string;
      };
      type: string;
      properties: Record<string, unknown>;
      slots: string[];
      items: {
        key: {
          id: string;
          namespace: string;
        };
        type: string;
        properties: Record<string, unknown>;
        slot: string;
        slots?: string[];
        items?: {
          key: {
            id: string;
            namespace: string;
          };
          type: string;
          properties: Record<string, unknown>;
          slot: string;
        }[];
      }[];
    };
    variables: {
      type: string;
      key: string;
      keyValue: {
        value: string | boolean | number;
        valueType: string;
      };
    }[];
  };
  meta: {
    version: string;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | {}>
) {
  const pagePath = req.query.urlPath;
  if (pagePath === 'home') {
    res.status(200).json(homeStructure);
  } else if (pagePath === 'about/us') {
    res.status(200).json(aboutStructure);
  }
  
  res.status(400).json({});
}
