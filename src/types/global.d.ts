// types/global.d.ts
export {};

declare global {
  interface Window {
    $: typeof import('jquery');
    jQuery: typeof import('jquery');
    Haptic?: {  // Marking it optional to match the previous declaration
      init: () => void;
      Basic?: {
        init: () => void;
        preloader: () => void;
        BackgroundImage?: () => void;
        Animation: () => void;
        counterUp: () => void;
        StickyHeader: () => void;
        MobileMenu: () => void;
        TwinMax: () => void;
        scrollTop: () => void;
        HapticAnimation: () => void;
        TitleAnimation: () => void;
         HomeOneSliderSwiper?: () => void;
        HomeThreeSliderSwiper: () => void;
        CircleProgress: () => void;
        TeamSlider: () => void;
        TestimonialSlider: () => void;
        SponsorSlider1: () => void;
        TestimonialSliderTwo: () => void;
        TeamSliderThree: () => void;
        TestimonialSliderThree: () => void;
        SponsorSlider3: () => void;
        PortfolioFilterImage: () => void;
        BlogSliderThree: () => void;
        textanimation: () => void;
      };
    };
  }
}
