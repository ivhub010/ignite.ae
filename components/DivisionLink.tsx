import Link from 'next/link';
import type { ReactNode, CSSProperties } from 'react';

type Props = {
  href: string;
  external?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  children: ReactNode;
};

/** next/link for internal routes; new-tab anchor for external division sites. */
export default function DivisionLink({ href, external, children, ...rest }: Props) {
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  }
  return <Link href={href} {...rest}>{children}</Link>;
}
