import React from 'react';
import { Home, BookOpen, GraduationCap, Camera, ArrowDownToLine, MapPin } from 'lucide-react';
import Dock from './Dock';

export default function MobileBottomNav({ activeNav, onNavigate }) {
  const items = [
    {
      icon: <Home size={19} />,
      label: 'Home',
      onClick: () => onNavigate('Home'),
      className: activeNav === 'Home' ? 'is-active' : ''
    },
    {
      icon: <BookOpen size={19} />,
      label: 'About',
      onClick: () => onNavigate('About'),
      className: activeNav === 'About' ? 'is-active' : ''
    },
    {
      icon: <GraduationCap size={19} />,
      label: 'Academic',
      onClick: () => onNavigate('Academic'),
      className: activeNav === 'Academic' ? 'is-active' : ''
    },
    {
      icon: <Camera size={19} />,
      label: 'Gallery',
      onClick: () => onNavigate('Gallery'),
      className: activeNav === 'Gallery' ? 'is-active' : ''
    },
    {
      icon: <ArrowDownToLine size={19} />,
      label: 'Download',
      onClick: () => onNavigate('Download'),
      className: activeNav === 'Download' ? 'is-active' : ''
    },
    {
      icon: <MapPin size={19} />,
      label: 'Contact',
      onClick: () => onNavigate('Contact'),
      className: activeNav === 'Contact' ? 'is-active' : ''
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none pb-safe">
      <div className="pointer-events-auto">
        <Dock
          items={items}
          panelHeight={62}
          baseItemSize={44}
          magnification={62}
          distance={140}
        />
      </div>
    </div>
  );
}
