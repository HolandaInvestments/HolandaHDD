import { renderProposalHtml, type ProposalModel } from "@/lib/domains/documents/proposalTemplate";

export type PdfResult = {
  html: string;
  storageKey?: string;
};

export async function generateProposalPdf(model: ProposalModel): Promise<PdfResult> {
  const html = renderProposalHtml(model);

  return {
    html,
    storageKey: undefined
  };
}

