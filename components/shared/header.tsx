import { cn } from '@/lib/utils';

import * as React from 'react';
import { Container } from './container';
import Image from 'next/image';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/* Лого */}
                <div className='flex flex-row'>
                    <div><Image src="/piece-пицца-96 1 (1).svg" alt="лого" width={35} height={35}/></div>
                    <div>
                        <h1 className='font-bold font-mono text-2xl'>NEXT PIZZA</h1>
                        <p className='text-gray-500'>вкусней уже некуда</p></div>
                </div>
                {/* кнопки с левой стороны */}
                <div>

                </div>
            </Container>
        </header>
    );
}