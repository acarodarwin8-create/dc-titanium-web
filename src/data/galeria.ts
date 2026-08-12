export type GaleriaItem = {
  id: number;
  titulo: string;
  categoria: string;
  tipo: "gratis" | "pago";
  precio: number;
  imagen: string;
  software: string[];
};

export const GALERIA: GaleriaItem[] = [
  {
    id: 101,
    titulo: "Render Torre Titanium Quitumbe",
    categoria: "Render 3D",
    tipo: "gratis",
    precio: 0,
    imagen: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    software: ["RENDER"],
  },
  {
    id: 102,
    titulo: "Modelo BIM Federado: Edificio Corporativo",
    categoria: "Modelo BIM",
    tipo: "gratis",
    precio: 0,
    imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80",
    software: ["BIM"],
  },
  {
    id: 103,
    titulo: "Vista Interior: Torre Residencial SMF",
    categoria: "Render Interior",
    tipo: "gratis",
    precio: 0,
    imagen: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=500&fit=crop&q=80",
    software: ["RENDER"],
  },
  {
    id: 104,
    titulo: "Set Completo: Render + Planos Edificio Quitumbe",
    categoria: "Paquete Premium",
    tipo: "pago",
    precio: 29,
    imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&h=500&fit=crop&q=80",
    software: ["BIM", "RENDER"],
  },
  {
    id: 105,
    titulo: "Plantilla Revit .rte Certificada DC Titanium",
    categoria: "Plantilla Revit",
    tipo: "pago",
    precio: 19,
    imagen: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=560&fit=crop&q=80",
    software: ["REVIT"],
  },
  {
    id: 106,
    titulo: "Colección 20 Renders Arquitectónicos AEC",
    categoria: "Colección Renders",
    tipo: "pago",
    precio: 39,
    imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&h=560&fit=crop&q=80",
    software: ["RENDER"],
  },
];
