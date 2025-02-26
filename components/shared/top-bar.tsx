import { cn } from '@/lib/utils';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className="flex justify-between">
                <div className="order-1"><Categories/></div>
                <div className="order-2"><SortPopup/></div>
            </Container>
        </div>
    );
}