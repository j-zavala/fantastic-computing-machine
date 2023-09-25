/** @type {import('next').NextConfig} */
const nextConfig = {}
// const withReaict = require('reaict-js');
const { next } = require('reaict-js');

module.exports = next(
  nextConfig,
  { apiKey: process.env.OPENAI-API-KEY-REAICT },
);