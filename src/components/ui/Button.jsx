import { cn } from '@/lib/utils';

/**
 * variant: 'primary' | 'secondary'
 * as: 'a' | 'button'  (default: 'a')
 */
export default function Button({ children, variant = 'primary', as = 'a', className, ...props }) {
  const Tag = as;
  return (
    <Tag className={cn(variant === 'primary' ? 'btn-primary' : 'btn-secondary', className)} {...props}>
      {children}
    </Tag>
  );
}