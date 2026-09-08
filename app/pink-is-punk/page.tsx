import type { Metadata } from 'next';
import PinkIsPunkClient from './PinkIsPunkClient';

export const metadata: Metadata = {
  title: 'IGNITE Pink is Punk - UAE Breast Cancer Awareness Campaign',
  description:
    'Since 2008 IGNITE Pink is Punk has raised over AED 950,000 for breast cancer research in the UAE. Join us for three events in 2026 - Swim:Run, Moonlit Yoga and Pink Paddle.',
};

export default function PinkIsPunkPage() {
  return <PinkIsPunkClient />;
}