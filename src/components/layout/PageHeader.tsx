import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle, breadcrumb, children }: PageHeaderProps) => {
  return (
    <div className="bg-gradient-surface border-b border-border">
      <div className="container-custom py-16 md:py-20">
        {breadcrumb && (
          <nav className="mb-4">
            <p className="text-sm text-muted-foreground">{breadcrumb}</p>
          </nav>
        )}
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;