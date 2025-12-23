import type { ReactNode } from 'react';

interface Props {
  left: ReactNode;
  center: ReactNode;
}

export const Layout = ({ left, center }: Props) => {
  return (
    <div className="layout">
      <aside className="layout__left">{left}</aside>
      <section className="layout__center">{center}</section>
    </div>
  );
};
