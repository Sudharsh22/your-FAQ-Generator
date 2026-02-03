import { useState } from 'react';
import { ChevronDown, FileText, Upload } from 'lucide-react';
import CyberpunkBackground from '@/app/components/CyberpunkBackground';

export default function App() {
  const [documentText, setDocumentText] = useState('');
  const [numFaqs, setNumFaqs] = useState(5);
  const [outputType, setOutputType] = useState<'faqs' | 'interview'>('faqs');
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const scrollToTool = () => {
    const toolSection = document.getElementById('tool-section');
    toolSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileUpload = async (file: File) => {
    if (file.type === 'text/plain') {
      const text = await file.text();
      setDocumentText(text);
    } else if (file.type === 'application/pdf') {
      // Mock PDF handling - in production, you'd use a PDF parser
      setDocumentText('PDF content would be extracted here. For this demo, please paste text or upload a .txt file.');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleGenerate = () => {
    // Mock FAQ generation
    const mockFaqs = [
      {
        question: 'What is the primary purpose of this document?',
        answer: 'Based on the source document, this outlines the key principles and methodologies for ensuring content traceability in AI-generated outputs.',
      },
      {
        question: 'How does source-grounding differ from traditional generation?',
        answer: 'Source-grounding locks the AI to specific document passages, preventing hallucination and ensuring every statement can be traced back to the original text.',
      },
      {
        question: 'What file formats are supported?',
        answer: 'The system currently supports PDF and TXT file formats for document ingestion and processing.',
      },
      {
        question: 'Can the output be customized?',
        answer: 'Yes, users can specify the number of questions and choose between FAQ or interview question formats.',
      },
      {
        question: 'What guarantees are provided for accuracy?',
        answer: 'Each generated response includes source traceability markers, ensuring all content is directly derived from the input document.',
      },
    ];

    setFaqs(mockFaqs.slice(0, numFaqs));
  };

  const downloadFaqs = () => {
    const content = faqs
      .map((faq, i) => `Q${i + 1}: ${faq.question}\n\nA${i + 1}: ${faq.answer}\n\n`)
      .join('---\n\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'strict-faqs.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif] relative">
      <CyberpunkBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Product Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-primary/30 backdrop-blur-sm shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <FileText className="size-3.5 text-primary" />
            <span className="text-xs text-primary tracking-wide">AI-Powered</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl tracking-tight text-foreground bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]">
            your FAQ Generator
          </h1>

          {/* Value Proposition */}
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
            Generate traceable, source-grounded FAQs directly from your documents.
          </p>

          {/* Supporting Text */}
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Zero hallucination. Every answer is locked to your source material with full traceability.
            Perfect for compliance, documentation, and knowledge management.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <button
              onClick={scrollToTool}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-105 border border-primary"
            >
              Generate FAQs
            </button>
            <button
              onClick={scrollToTool}
              className="text-accent hover:text-accent/80 transition-colors drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]"
            >
              How it works
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToTool}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary hover:text-accent transition-colors animate-bounce drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
          aria-label="Scroll to tool"
        >
          <ChevronDown className="size-6" />
        </button>
      </section>

      {/* Tool Section */}
      <section id="tool-section" className="min-h-screen py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl text-foreground">Workspace</h2>
            <p className="text-muted-foreground">
              Upload your document and configure your FAQ generation
            </p>
          </div>

          {/* Source Document Input */}
          <div className="bg-card border border-primary/30 rounded-lg p-8 space-y-6 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-foreground">Source Document</h3>
                <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/30 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  Traceability Enabled
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Paste text or upload a document to generate FAQs
              </p>
            </div>

            {/* File Upload Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                isDragOver
                  ? 'border-primary bg-primary/10 shadow-[0_0_30px_rgba(0,240,255,0.3)]'
                  : 'border-primary/30 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]'
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
            >
              <Upload className="size-8 text-muted-foreground mx-auto mb-4" />
              <p className="text-sm text-foreground mb-2">
                Drop your file here, or{' '}
                <label className="text-primary hover:underline cursor-pointer">
                  browse
                  <input
                    type="file"
                    className="hidden"
                    accept=".txt,.pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(file);
                    }}
                  />
                </label>
              </p>
              <p className="text-xs text-muted-foreground">Supports PDF and TXT files</p>
            </div>

            {/* Text Input */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Or paste your text</label>
              <textarea
                value={documentText}
                onChange={(e) => setDocumentText(e.target.value)}
                className="w-full min-h-[200px] bg-input border border-border rounded-lg p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Paste your document text here..."
              />
            </div>
          </div>

          {/* Controls */}
          <div className="bg-card border border-accent/30 rounded-lg p-8 space-y-6 shadow-[0_0_20px_rgba(255,0,255,0.1)]">
            <h3 className="text-foreground">Generation Settings</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Number of FAQs */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Number of questions</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={numFaqs}
                  onChange={(e) => setNumFaqs(Number(e.target.value))}
                  className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Output Type */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Output type</label>
                <select
                  value={outputType}
                  onChange={(e) => setOutputType(e.target.value as 'faqs' | 'interview')}
                  className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="faqs">FAQs</option>
                  <option value="interview">Interview Questions</option>
                </select>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!documentText.trim()}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] border border-primary"
            >
              Generate {outputType === 'faqs' ? 'FAQs' : 'Interview Questions'}
            </button>
          </div>

          {/* Output Section */}
          {faqs.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-foreground">Generated Output</h3>
                <button
                  onClick={downloadFaqs}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download as TXT
                </button>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 space-y-3 hover:border-primary/30 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-foreground flex-1">{faq.question}</h4>
                      <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent border border-accent/30 whitespace-nowrap shadow-[0_0_10px_rgba(255,0,255,0.2)]">
                        Source-grounded
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}