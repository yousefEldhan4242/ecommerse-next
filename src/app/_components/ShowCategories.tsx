import Product from "@/interfaces";
import PropTypes from "prop-types";

interface CategoryCard {
  index: number;
  currentIndex: number;
  name: string;
  icon?: React.ReactElement;
  title?: string;
}

const CategoryCard = ({
  index,
  currentIndex,
  name,
  icon,
  title,
}: CategoryCard) => {
  return (
    <div
      className={`flex flex-col gap-4 items-center justify-center p-5 border ${
        currentIndex == index
          ? "bg-main-color text-white"
          : "hover:bg-main-color hover:text-white"
      } group rounded duration-300`}
    >
      <div className={`text-3xl`}>{icon}</div>

      {title && (
        <div>
          <h2 className="text-[25px] font-semibold">{title}</h2>
        </div>
      )}

      <div className="text-lg">{name}</div>
    </div>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
  currentIndex: PropTypes.number,
  index: PropTypes.number,
};

interface ShowCategoriesInterface {
  currentIndex: number;
  categories: Product[];
}

const ShowCategories = ({
  currentIndex,
  categories,
}: ShowCategoriesInterface) => {
  return (
    <section
      className={`grid ${
        categories[0].title
          ? "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
          : "grid-cols-[repeat(auto-fill,minmax(150px,1fr))]"
      }  gap-8`}
    >
      {categories.map((category, index) => (
        <CategoryCard
          index={index}
          currentIndex={currentIndex}
          key={category.name}
          {...category}
        />
      ))}
    </section>
  );
};

ShowCategories.propTypes = {
  categories: PropTypes.array,
  currentIndex: PropTypes.number,
};
export default ShowCategories;
