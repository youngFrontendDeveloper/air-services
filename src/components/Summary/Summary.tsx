import type { Service } from '../../types/service';

interface Props {
  services: Service[];
}

export const Summary = ({ services }: Props) => {
  const total = services.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="summary">
      {services.length > 0 ? (
        <>
          <h2 className="summary__title">Итого:</h2>
          <ul className="summary__list">
            {services.map((service) => (
              <li key={service.id} className="summary__item">
                {service.title} — {service.price} ₽
              </li>
            ))}
          </ul>         
            <p className="summary__total">
              Общая сумма: <span className="summary__total-price">{total}&nbsp;₽</span>
            </p>
         
          <button type="button" className="summary__button">Оформить заказ</button>
        </>
      ) : (
        <p>Дополнительные услуги не выбраны</p>
      )}
    </div>
  );
};
