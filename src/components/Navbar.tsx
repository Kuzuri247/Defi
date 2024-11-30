import React from 'react';
import { Brand } from './Navigation/Brand';
import { WalletButton } from './Navigation/WalletButton';
import { SettingsButton } from './Navigation/SettingsButton';
import { MobileMenu } from './Navigation/MobileMenu';
import { NavLinks } from './Navigation/NavLinks';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-900 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Brand />
            <div className="hidden lg:ml-10 lg:block">
              <NavLinks className="flex space-x-4" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SettingsButton />
            <WalletButton />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}