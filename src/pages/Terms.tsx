import React from 'react';
import AppLayout from '@/components/AppLayout';

const Terms: React.FC = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6 text-muted-foreground">
            By accessing and using ComputePortal, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="mb-6 text-muted-foreground">
            Permission is granted to temporarily download one copy of the materials on ComputePortal's website for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="mb-6 text-muted-foreground">
            The materials on ComputePortal's website are provided on an 'as is' basis. ComputePortal makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="mb-6 text-muted-foreground">
            In no event shall ComputePortal or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ComputePortal's website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
          <p className="mb-6 text-muted-foreground">
            The materials appearing on ComputePortal's website could include technical, typographical, or photographic errors. ComputePortal does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
          <p className="mb-6 text-muted-foreground">
            ComputePortal has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
          <p className="mb-6 text-muted-foreground">
            ComputePortal may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p className="mb-6 text-muted-foreground">
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which ComputePortal operates.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Terms;