import { cn } from '@/lib/utils';

import * as React from 'react';
import { Container } from './container';
import Image from 'next/image';

import { ShoppingCart, User } from 'lucide-react';
import { Button } from '../ui';


interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/* Лого */}
                <div className='flex  gap-4 items-center'>
                    <Image src="/logo.svg" alt="лого" width={35} height={35} />
                    <div>
                        <h1 className='uppercase font-black text-2xl'> next pizza</h1>
                        <p className='text-gray-500 '>вкусней уже некуда</p>
                    </div>
                </div>

                {/* кнопки с левой стороны */}
                <div className='flex  gap-4 items-center'>
                    <Button variant="outline" className='gap-2'><User size={16} />Профиль</Button>
                    <Button variant="default" className='gap-2'> 520 ₽ |<ShoppingCart size={16} />3</Button>
                </div>
            </Container>
        </header>
    );
}