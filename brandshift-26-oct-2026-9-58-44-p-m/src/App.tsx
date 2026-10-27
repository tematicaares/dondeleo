/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

export default function App() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Información oficial de la sucursal proporcionada en las imágenes
  const branchInfo = {
    name: "San Salvador",
    subtitle: "Colonia Arce",
    address: "Colonia Arce, Avenida Infantería No. 1, San Salvador.",
    phones: ["2564-1673", "7890-2230"],
    googleMapsUrl: "https://maps.app.goo.gl/unnMKBo437wByyBf6",
    whatsappUrl: "https://wa.me/50378902230?text=Hola%20Donde%20Leo,%20quisiera%20hacer%20una%20consulta%20o%20reserva",
    instagramUrl: "https://www.instagram.com/restaurantedondeleo?igsh=MTViYXdhb3A3MGY1Ng==",
    facebookUrl: "https://www.facebook.com/leococinamediterranea?mibextid=ZbWKwL"
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(branchInfo.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">

      {/* NAVBAR (Menú de Navegación idéntico al estilo Caliche's con logo y nombre Donde Leo) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm" style={{ backgroundColor: '#111827' }}>
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
          
          <a className="navbar-brand flex items-center gap-2 text-decoration-none group" href="#">
            <img 
              src="/images/logo.jpg" 
              alt="Donde Leo Logo" 
              height="40" 
              className="h-10 w-10 rounded-full border-2 border-[#FFA500] object-cover bg-black p-0.5"
            />
            <span className="font-extrabold tracking-wider text-xl text-white group-hover:text-[#FFA500] transition-colors">
              DONDE LEO
            </span>
          </a>

          <div className="flex items-center gap-3 sm:gap-6">
            <a 
              className="text-white hover:text-[#FFA500] text-sm font-semibold px-2 py-1 transition-colors" 
              href="#"
            >
              Inicio
            </a>
            <a 
              className="text-gray-300 hover:text-[#FFA500] text-sm font-medium px-2 py-1 transition-colors" 
              href="#sucursales"
            >
              Sucursales
            </a>

            {/* Botón directo de WhatsApp */}
            <a 
              href={branchInfo.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-warning btn-sm font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 text-xs shadow transition-transform hover:scale-105"
              style={{ backgroundColor: '#FFA500', borderColor: '#FFA500', color: '#111827' }}
            >
              <i className="bi bi-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </nav>

      {/* JUMBOTRON / HÉROE PRINCIPAL (Mismo diseño con imagen de fondo, logo centrado y color #FFA500) */}
      <div className="jumbotron-custom text-center pb-8 pt-10 relative overflow-hidden">
        
        {/* Difuminado suave hacia el blanco de la sección de sucursales */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/40 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl flex flex-col items-center">
          
          {/* Logo centrado con borde #FFA500 */}
          <div className="relative mb-3">
            <img 
              src="/images/logo.jpg" 
              alt="Donde Leo - Cocina Mediterránea" 
              className="hero-logo w-32 h-32 sm:w-36 sm:h-36 rounded-full shadow-2xl border-4 border-[#FFA500] object-cover bg-black"
            />
          </div>

          {/* Título Principal */}
          <h1 className="main-title text-4xl sm:text-6xl font-black uppercase mb-2">
            Donde Leo
          </h1>

          {/* Subtítulo del Jumbotron */}
          <p className="subtitle-custom text-slate-800 text-lg sm:text-xl font-bold max-w-2xl mx-auto mb-4">
            Cocina Mediterránea - El auténtico sabor del Mediterráneo
          </p>

          {/* Botón único del Jumbotron */}
          <div className="flex items-center justify-center mt-2">
            <a 
              className="btn btn-warning btn-lg px-6 py-2.5 font-bold shadow-md rounded-xl flex items-center gap-2 text-base transition-all transform hover:-translate-y-0.5" 
              href="#sucursales" 
              role="button"
              style={{ backgroundColor: '#FFA500', borderColor: '#FFA500', color: '#111827' }}
            >
              <i className="bi bi-geo-alt-fill"></i>
              Ver Sucursales
            </a>
          </div>

        </div>
      </div>

      {/* SECCIÓN DE SUCURSALES (Enfocada exclusivamente en las sucursales con ubicación, Google Maps y WhatsApp) */}
      <div className="container mx-auto px-4 my-10 max-w-5xl" id="sucursales">
        
        <h2 className="text-center font-extrabold text-3xl sm:text-4xl text-slate-900 mb-2">
          Nuestras Sucursales
        </h2>
        <div className="w-16 h-1.5 bg-[#FFA500] mx-auto rounded-full mb-3"></div>
        <p className="text-center text-slate-600 mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Encuentra nuestra ubicación exacta en San Salvador y comunícate de inmediato por WhatsApp.
        </p>
        
        {/* Grilla de Sucursales (Estructura de tarjetas igual al archivo de referencia) */}
        <div className="row g-4 justify-content-center">
          
          {/* SUCURSAL SAN SALVADOR - COLONIA ARCE */}
          <div className="col-md-8 col-lg-7">
            <div className="card h-100 shadow-md border-0 rounded-2xl bg-white overflow-hidden branch-card">
              <div className="card-body d-flex flex-column p-6 sm:p-8">
                
                <div className="flex items-center justify-between mb-3 border-b-2 border-[#FFA500] pb-2">
                  <h3 className="card-title text-2xl font-bold text-slate-900 m-0 flex items-center gap-2">
                    <i className="bi bi-shop text-[#FFA500]"></i>
                    {branchInfo.name}
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-[#b87500]">
                    Sede Oficial
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Ubicación
                  </span>
                  <p className="card-text text-slate-700 font-medium text-base mb-2">
                    <i className="bi bi-geo-alt-fill text-[#FFA500] me-2 text-lg"></i>
                    {branchInfo.address}
                  </p>
                  <button 
                    onClick={handleCopyAddress}
                    className="text-xs font-bold text-[#b87500] hover:text-[#FFA500] flex items-center gap-1 transition-colors"
                  >
                    <i className={`bi ${copiedAddress ? 'bi-check-circle-fill text-green-600' : 'bi-clipboard'}`}></i>
                    {copiedAddress ? '¡Dirección copiada al portapapeles!' : 'Copiar dirección'}
                  </button>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Teléfonos de Atención
                  </span>
                  <div className="phone-info text-slate-800 text-base font-bold flex flex-wrap gap-3">
                    {branchInfo.phones.map((phone, idx) => (
                      <a 
                        key={idx}
                        href={`tel:${phone.replace(/[^0-9]/g, '')}`} 
                        className="bg-slate-50 hover:bg-amber-50 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 hover:text-[#FFA500] transition-colors flex items-center gap-2"
                      >
                        <i className="bi bi-telephone-fill text-[#FFA500]"></i>
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* BOTONES DE ACCIÓN (Google Maps y WhatsApp como solicitó el usuario) */}
                <div className="d-grid gap-2 mt-auto pt-3 border-t border-slate-100">
                  
                  {/* Botón WhatsApp */}
                  <a 
                    href={branchInfo.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-success py-3 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm text-base hover:bg-emerald-600 transition-all"
                    style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                  >
                    <i className="bi bi-whatsapp text-xl"></i>
                    <span>Contactar por WhatsApp (7890-2230)</span>
                  </a>

                  {/* Botón Google Maps / Waze */}
                  <a 
                    href={branchInfo.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-primary py-3 font-bold rounded-xl flex items-center justify-center gap-2 text-base transition-all border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    <i className="bi bi-geo-alt-fill text-xl"></i>
                    <span>Abrir en Google Maps / Waze</span>
                  </a>

                  {/* Botones secundarios de redes sociales */}
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <a 
                      href={branchInfo.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-danger btn-sm py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5"
                    >
                      <i className="bi bi-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a 
                      href={branchInfo.facebookUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary btn-sm py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5"
                    >
                      <i className="bi bi-facebook"></i>
                      <span>Facebook</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER (Mismo estilo que el proyecto de referencia) */}
      <footer className="bg-dark text-white text-center py-5 mt-auto" style={{ backgroundColor: '#111827' }}>
        <div className="container mx-auto px-4">
          <p className="mb-1 font-bold text-base text-white">
            Donde Leo · Cocina Mediterránea
          </p>
          <p className="mb-2 text-gray-400 text-xs sm:text-sm">
            {branchInfo.address} · Tel. 2564-1673 / 7890-2230
          </p>
          <p className="mb-0 text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Donde Leo. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
