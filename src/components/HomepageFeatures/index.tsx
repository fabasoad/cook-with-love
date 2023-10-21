import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cakes',
    description: (
      <>
        Welcome to a world of sweetness and indulgence at our online cake shop.
        Explore our divine assortment of cakes, lovingly crafted to satisfy your
        sweet cravings. From luscious chocolate decadence to fruity delights, our
        cakes are designed to add a touch of magic to your celebrations or simply
        brighten your day. Order now and let the flavors of our exquisite cakes
        transport you to a world of irresistible treats.
      </>
    ),
  },
  {
    title: 'Macarons',
    description: (
      <>
        Discover the epitome of elegance and flavor with our exquisite macarons.
        Delicately crafted, each bite of our macarons is a burst of perfection,
        a symphony of taste. Indulge in a world of vibrant colors and delightful
        fillings, making every moment a sweet celebration. Shop now and experience
        the art of macaron magic with us.
      </>
    ),
  },
  {
    title: 'Marshmallows',
    description: (
      <>
        Treat yourself to the fluffy, melt-in-your-mouth goodness of our gourmet
        marshmallows. Handcrafted with care, our marshmallows are the epitome of
        sweet, pillowy delight. From classic vanilla to innovative flavor combinations,
        they're perfect for toasting, s'mores, or simply enjoying as a sweet,
        cozy treat. Shop now and experience the joy of marshmallow indulgence
        like never before.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
