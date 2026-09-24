import { certificateAssetPath } from '../utils/assets'

export const certifications = [
  {
    id: 'mongodb-developer',
    name: 'MongoDB Associate Developer',
    issuer: 'MongoDB',
    image: certificateAssetPath('mongodb-associate-developer'),
    summary: 'Database design and application development using MongoDB technologies.'
  },
  {
    id: 'mongodb-dba',
    name: 'MongoDB Associate Database Administrator',
    issuer: 'MongoDB',
    image: certificateAssetPath('mongodb-associate-database-administrator'),
    summary: 'Database administration, operations, and performance understanding for MongoDB.'
  },
  {
    id: 'agentforce',
    name: 'Salesforce Certified Agentforce Specialist',
    issuer: 'Salesforce',
    image: certificateAssetPath('salesforce-agentforce-specialist'),
    summary: 'AI agent and Salesforce automation workflow knowledge.'
  },
  {
    id: 'nvidia-prompt',
    name: 'NVIDIA Building LLM Applications with Prompt Engineering',
    issuer: 'NVIDIA',
    image: certificateAssetPath('nvidia-building-llm-applications-with-prompt-engineering'),
    summary: 'Prompt engineering foundations for building LLM-powered applications.'
  },
  {
    id: 'nvidia-rag',
    name: 'NVIDIA Building RAG Agents with LLMs',
    issuer: 'NVIDIA',
    image: certificateAssetPath('nvidia-building-rag-agents-with-llms'),
    summary: 'Retrieval-augmented generation and agentic application design patterns.'
  },
  {
    id: 'nvidia-agentic',
    name: 'NVIDIA Agentic AI certification',
    issuer: 'NVIDIA',
    image: certificateAssetPath('nvidia-agentic-ai'),
    summary: 'Agentic AI concepts and autonomous workflow patterns.'
  },
  {
    id: 'linguaskill',
    name: 'Linguaskill English Certification',
    issuer: 'Cambridge',
    image: certificateAssetPath('linguaskill-english'),
    summary: 'English language assessment and communication capability.'
  },
  {
    id: 'automation-anywhere',
    name: 'Certified Advanced Automation Professional — Automation Anywhere',
    issuer: 'Automation Anywhere',
    image: certificateAssetPath('automation-anywhere-advanced-professional'),
    summary: 'Automation and process orchestration professional certification.'
  }
]
