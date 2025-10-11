import { useEffect, useMemo, useState } from 'react';
import bannerLayerOne from '../assets/images/banner-parallax-1.png';
import bannerLayerTwo from '../assets/images/banner-parallax-2.png';
import bannerLayerThree from '../assets/images/banner-parallax-3.png';
import singleRoomImage from '../assets/images/single-room.jpg';
import doubleRoomImage from '../assets/images/double-room.jpg';
import sharedRoomImage from '../assets/images/shared-room.jpg';

const roomOptions = [
  {
    key: 'single',
    title: 'Single room',
    price: '470€ per month per person',
    deposit: 'Security deposit: 470€',
    description:
      'Includes a single bed with linens, wardrobe/closet, and a table or desk — ideal for focused study and privacy.',
    image: singleRoomImage,
    imageAlt: 'Cozy single room with a desk'
  },
  {
    key: 'double',
    title: 'Double room',
    price: '575€ per month for two people',
    deposit: 'Security deposit: 650€',
    description:
      'Perfect for couples or close friends. Features a double bed with linens, spacious wardrobe/closet, and a shared table or desk.',
    image: doubleRoomImage,
    imageAlt: 'Comfortable double room'
  },
  {
    key: 'shared',
    title: 'Shared room',
    price: '350€ per month per person',
    deposit: 'Security deposit: 450€',
    description:
      'A budget-friendly option with single beds, linens, wardrobe/closet space, and individual tables or desks. Rooms host two to three people.',
    image: sharedRoomImage,
    imageAlt: 'Shared room for students'
  }
];

const aboutImageModules = import.meta.glob('../assets/images/photo*.jpg', { eager: true });
const aboutImages = Object.entries(aboutImageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, module]) => module.default);

const LandingHero = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const prefix = 'Your ';
  const phrases = useMemo(() => ['new home in Paris', 'new family and friends', 'new safe place', 'new life'], []);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let animationFrameId = 0;

    const handleScroll = () => {
      animationFrameId = window.requestAnimationFrame(() => {
        setScrollOffset(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const layerTransforms = useMemo(
    () => [scrollOffset * 0.18, scrollOffset * 0.35, scrollOffset * 0.58],
    [scrollOffset]
  );

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] ?? '';

    if (currentPhrase.length === 0) {
      return undefined;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      const timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1500);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    if (isDeleting && charIndex === 0) {
      const timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      }, 300);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    const timeoutId = window.setTimeout(() => {
      setCharIndex((index) => index + (isDeleting ? -1 : 1));
    }, isDeleting ? 60 : 110);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  const currentPhrase = phrases[phraseIndex] ?? '';
  const typedText = `${prefix}${currentPhrase.slice(0, charIndex)}`;

  return (
    <section className="relative h-screen -mt-24 pt-24 flex items-center justify-center text-white" id="hero">
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bannerLayerOne}
          alt="La REZ banner foreground"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translate3d(0, ${layerTransforms[0]}px, 0)` }}
        />
        <img
          src={bannerLayerTwo}
          alt="La REZ banner midground"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translate3d(0, ${layerTransforms[1]}px, 0)` }}
        />
        <img
          src={bannerLayerThree}
          alt="La REZ banner background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translate3d(0, ${layerTransforms[2]}px, 0)` }}
        />
      </div>
      <div className="absolute inset-0 bg-neutral-900/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight" aria-live="polite">
          {typedText}
          <span className="ml-1 inline-block h-[1.2em] w-0.5 bg-white animate-pulse" />
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Experience the student life of paris with like-minded people from all over the world.
        </p>
        <a
          href="#rooms"
          className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-transform transform hover:scale-105 inline-block"
        >
          Explore Rooms
        </a>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const images = useMemo(() => aboutImages, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = images.length > 0;

  useEffect(() => {
    if (!hasImages || images.length === 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % images.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [hasImages, images.length]);

  const goToPrevious = () => {
    if (!hasImages) {
      return;
    }

    setCurrentIndex((index) => (index - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    if (!hasImages) {
      return;
    }

    setCurrentIndex((index) => (index + 1) % images.length);
  };

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="about">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
              Welcome to La REZ!
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-4">
              La Résidence des Étudiants Étrangers (La REZ) is an international student residence in the south of Paris that offers affordable accommodation for students and young professionals. We welcome tenants for both short-term (1 month minimum) and long-term (maximum one year) stays.
            </p>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
              We are a dynamic space where you can exchange and interact with peers from various disciplines and cultures. We foster a sense of community, while also respecting each other's person and privacy.
            </p>
            <div className="flex items-center text-text-light dark:text-text-dark">
              <span className="material-icons text-primary mr-3">train</span>
              <p>
                Conveniently located just a 4-minute walk from Savigny-sur-Orge station (RER C), reaching the center of Paris is a quick 20-minute journey.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-3xl shadow-2xl overflow-hidden">
            {hasImages ? (
              <>
                <img
                  src={images[currentIndex]}
                  alt="Life at La REZ"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                  key={images[currentIndex]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex flex-col gap-3 text-left">
                    <span className="px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs uppercase tracking-wide self-start">
                      Life at La REZ
                    </span>
                    <h3 className="text-white text-3xl font-semibold drop-shadow">Campus Moments</h3>
                    <p className="text-white/85 text-sm leading-relaxed max-w-sm">
                      Real glimpses from our shared kitchens, lounges, and community events.
                    </p>
                  </div>
                </div>
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-black/30 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
                      aria-label="Previous image"
                    >
                      <span className="material-icons text-2xl">chevron_left</span>
                    </button>
                    <button
                      type="button"
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-black/30 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
                      aria-label="Next image"
                    >
                      <span className="material-icons text-2xl">chevron_right</span>
                    </button>
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((imageSrc, index) => (
                        <button
                          key={imageSrc}
                          type="button"
                          onClick={() => setCurrentIndex(index)}
                          className={`h-2.5 w-2.5 rounded-full ${
                            index === currentIndex ? 'bg-white/90' : 'bg-white/45'
                          }`}
                          aria-label={`Show image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-background-dark text-text-light">
                <p>No images available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const RoomsSection = () => {
  return (
    <section className="py-20 bg-card-light dark:bg-card-dark" id="rooms">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2 text-text-light dark:text-text-dark">Find Your Perfect Space</h2>
        <p className="text-text-muted-light dark:text-text-muted-dark mb-12 max-w-2xl mx-auto">
          We offer a variety of rooms to suit your needs and budget. All rooms are fully furnished and ready for you to move in.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomOptions.map(({ key, title, price, deposit, description, icon, image, imageAlt }) => (
            <div
              key={key}
              className="bg-background-light dark:bg-background-dark rounded-3xl shadow-2xl overflow-hidden aspect-square flex flex-col relative"
            >
              <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="space-y-4 text-left">
                  <div>
                    <h3 className="text-3xl font-semibold text-white">{title}</h3>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 text-white/85 text-sm">
                        <span className="material-icons text-white/80 text-base">payments</span>
                        <span>{price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/75 text-sm">
                        <span className="material-icons text-white/75 text-base">savings</span>
                        <span>{deposit}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{description}</p>
                </div>
                <button className="w-full bg-white/90 text-primary font-semibold py-2 rounded-full shadow-lg shadow-black/20 transition hover:bg-white">
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AmenitiesSection = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="amenities">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-text-light dark:text-text-dark">Everything You Need</h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            Our residence is equipped with modern facilities to make your stay comfortable and convenient.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: 'wifi',
              title: 'High-Speed Wi-Fi',
              description: 'Stay connected with fiber optic internet available in all rooms and common areas.'
            },
            {
              icon: 'kitchen',
              title: 'Communal Kitchens',
              description: 'Fully equipped kitchens to prepare your meals and share with friends.'
            },
            {
              icon: 'shower',
              title: 'Modern Shower Areas',
              description: 'Clean and modern shower facilities for your daily use.'
            },
            {
              icon: 'local_laundry_service',
              title: 'Laundry Facilities',
              description: 'On-site washing machines and dryers available for all residents.'
            },
            {
              icon: 'deck',
              title: 'Private Garden',
              description: 'Relax and unwind in our beautiful and secure private garden.'
            },
            {
              icon: 'security',
              title: 'Secure & Safe',
              description: 'Your safety is our priority. The residence is equipped with security measures.'
            }
          ].map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-card-light dark:bg-card-dark p-8 rounded-lg shadow-md flex items-start"
            >
              <span className="material-icons text-primary text-4xl mr-6">{icon}</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{title}</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  return (
    <section className="bg-primary text-white" id="cta">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Don't miss the opportunity to live in one of the most vibrant student communities in Paris. Apply now!
        </p>
        <a
          href="#contact"
          className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
        >
          Book Your Room Today
        </a>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div>
      <LandingHero />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <CallToActionSection />
    </div>
  );
};

export default LandingPage;
