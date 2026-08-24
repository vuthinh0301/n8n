import type { INodeProperties } from 'n8n-workflow';

import * as getMany from './getMany.operation';
import * as upload from './upload.operation';

export { getMany, upload };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['attachment'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'List the attachments on a page, optionally downloading each file',
				action: 'Get many attachments',
			},
			{
				name: 'Upload',
				value: 'upload',
				description: 'Upload a file as an attachment on a page',
				action: 'Upload an attachment',
			},
		],
		default: 'getMany',
	},
	...getMany.description,
	...upload.description,
];
