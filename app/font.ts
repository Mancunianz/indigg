import localFont from 'next/font/local';

export const poppins = localFont({
  src: [
    {
      path: '../fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
    },
    {
      path: '../fonts/Poppins/Poppins-Medium.ttf',
      weight: '500',
    },
    {
      path: '../fonts/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../fonts/Poppins/Poppins-Bold.ttf',
      weight: '700',
    },
    {
      path: '../fonts/Poppins/Poppins-ExtraBold.ttf',
      weight: '800',
    },
  ],
  preload: true,
  display: 'swap',
  style: 'normal',
});
