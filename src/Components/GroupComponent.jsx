import GroupList from "./GroupList";
import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frequenciesGroup}>
        <h1 className={styles.frequentlyAskedQuestions}>
          Frequently asked questions
        </h1>
        <div className={styles.loremIpsumDolar}>
          Lorem Ipsum Dolar Sit Amet Lorem Ipsum Dolar Sit Amet!
        </div>
      </div>
      <div className={styles.arrowsFAQ}>
        <div className={styles.groupList}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <h3 className={styles.loremIpsumDolar1}>
              Lorem Ipsum Dolar Sit Amet Lorem Ipsum
            </h3>
            <img
              className={styles.arrowrightIcon}
              loading="eager"
              alt=""
              src="/arrowright.svg"
            />
          </div>
          <button className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.loremIpsumDolar2}>
              Lorem Ipsum Dolar Sit Amet Lorem Ipsum
            </div>
            <img
              className={styles.arrowrightIcon1}
              alt=""
              src="/arrowright.svg"
            />
          </button>
        </div>
        <GroupList />
        <GroupList />
      </div>
    </div>
  );
};

export default GroupComponent;
