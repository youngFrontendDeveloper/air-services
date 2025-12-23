
import type { Service } from '../../types/service';
import { ServiceItem } from '../ServiceItem/ServiceItem';

interface Props {
  services: Service[];
  onAdd: (service: Service) => void;
}

export const ServiceList = ({ services, onAdd }: Props) => {
  return (
    <section className="service-list">
      {services.map(service => (
        <ServiceItem
          key={service.id}
          service={service}
          onAdd={onAdd}
        />
      ))}
    </section>
  );
};
