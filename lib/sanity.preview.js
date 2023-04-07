'use client';

import {definePreview} from 'next-sanity/preview'
import {projectId, dataset} from './sanity.client'

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}

if (!projectId || !dataset) {
  throw new Error(`projectId atau dataset kamu hilang, silahkan periksa sanity.json atau file .env kamu...`);
}

export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly})