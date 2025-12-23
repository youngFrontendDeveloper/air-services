import type { Service } from '../../types/service';

interface Props {
  services: Service[];
}

export const Summary = ({ services }: Props) => {
  const total = services.reduce((sum, item) => sum + item.price, 0);

  return (
    <section>
      {services.length > 0 ? (
        <>
          <h2>Итого:</h2>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                {service.title} — {service.price} ₽
              </li>
            ))}
          </ul>
          <div>
            <strong>Сумма: {total} ₽</strong>
          </div>
          <button>Оформить заказ</button>
        </>
      ) : (
        <p>Дополнительные услуги не выбраны</p>
      )}
    </section>
  );
};
