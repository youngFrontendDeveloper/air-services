import { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { ServiceList } from './components/ServiceList/ServiceList';
import { Summary } from './components/Summary/Summary';
import { services } from './data/services';
import type { Service } from './types/service';

export default function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const handleAddService = (service: Service) => {
    setSelectedServices((prev) => {
      if (prev.find((item) => item.id === service.id)) {
        return prev;
      }
      return [...prev, service];
    });
  };

  return (
    <main className={'main'}>
      <h1 className={'main-title'}>Дополнительные услуги</h1>
      <Layout
        left={<ServiceList services={services} onAdd={handleAddService} />}
        center={<Summary services={selectedServices} />}
      />
    </main>
  );
}
