import { useState } from 'react';
import type { Service } from '../../types/service';

interface Props {
  service: Service;
  onAdd: (service: Service) => void;
}

export const ServiceItem = ({ service, onAdd }: Props) => {
  const [buttonText, setButtonText] = useState('Добавить');
  const [isAdded, setIsAdded] = useState(false);

  const styleButton = isAdded
    ? { backgroundColor: 'rgba(43, 159, 68, 0.59)', color: '#000000' }
    : undefined;

  const addService = () => {
    onAdd(service);
    setButtonText('Добавлено');
    setIsAdded(true);
  };
  return (
    <div className="service">
      <div className="service__info">
        <div className="service__title">{service.title}</div>
        <strong className="service__price">{service.price}&nbsp;₽</strong>
      </div>
      <button
        className="service__button"
        onClick={addService}
        type="button"
        style={styleButton}
        disabled={isAdded}
      >
        {buttonText}
      </button>
    </div>
  );
};
