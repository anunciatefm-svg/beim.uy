import { useState } from 'react';
import type { Product } from '../data/products';

const badges: Record<string,{bg:string,color:string}> = {
  Nuevo:   { bg:'rgba(42,157,143,0.12)', color:'#1f7a6e' },
  Oferta:  { bg:'rgba(239,68,68,0.1)',   color:'#dc2626' },
  Popular: { bg:'rgba(249,115,22,0.1)',  color:'#ea580c' },
  Último:  { bg:'rgba(234,179,8,0.1)',   color:'#ca8a04' },
};

const WaIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.83L.057 23.945l6.257-1.443A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 0 1-5.017-1.382l-.36-.214-3.71.856.878-3.593-.234-.37A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

export default function ProductCard({ product }: { product: Product }) {
  const [hov, setHov] = useState(false);
  const b = product.badge ? badges[product.badge] : null;
  const msg = encodeURIComponent(`Hola! Me interesa el ${product.name} ${product.storage} ${product.color} (USD ${product.price}). ¿Tienen stock?`);

  return (
    <div id={`product-${product.id}`} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background:'#fff', borderRadius:24, overflow:'hidden', transition:'all 0.3s', cursor:'pointer', position:'relative',
        transform: hov ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hov ? '0 20px 60px rgba(42,157,143,0.18),0 4px 15px rgba(0,0,0,0.06)' : '0 2px 15px rgba(0,0,0,0.06)',
      }}>
      {b && product.badge && (
        <div style={{ position:'absolute', top:12, left:12, zIndex:2, fontSize:11, fontWeight:700, padding:'4px 10px', borderRadius:999, background:b.bg, color:b.color }}>
          {product.badge}
        </div>
      )}
      {/* Image */}
      <div style={{ height:220, display:'flex', alignItems:'center', justifyContent:'center', transition:'background 0.3s', background: hov ? 'linear-gradient(135deg,#e8f7f6,#d0f0ec)' : '#f8fffe' }}>
        <img src={product.image} alt={product.name} style={{ maxHeight:200, width:'auto', objectFit:'contain', padding:20, transition:'transform 0.5s', transform: hov ? 'scale(1.08)' : 'scale(1)' }}/>
      </div>
      {/* Info */}
      <div style={{ padding:20 }}>
        <div style={{ fontSize:11, color:'#9ca3af', marginBottom:4 }}>{product.model}</div>
        <div style={{ fontWeight:700, color:'#1a2332', fontSize:14, marginBottom:4 }}>{product.name}</div>
        <div style={{ fontSize:12, color:'#9ca3af', marginBottom:16 }}>{product.color} · {product.storage}</div>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:16 }}>
          <div>
            <div style={{ fontSize:20, fontWeight:900, color:'#2a9d8f' }}>USD {product.price.toLocaleString()}</div>
            <div style={{ fontSize:11, color:'#9ca3af', marginTop:2 }}>Mayor: USD {product.priceWholesale.toLocaleString()}</div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:4 }}>
            <div style={{ width:7, height:7, borderRadius:'50%', background: product.inStock ? '#2a9d8f' : '#ef4444' }}/>
            <span style={{ fontSize:11, color:'#9ca3af' }}>{product.inStock ? 'En stock' : 'Sin stock'}</span>
          </div>
        </div>
        <a href={`https://wa.me/59892514774?text=${msg}`} target="_blank" rel="noopener noreferrer"
          style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6, width:'100%', padding:'10px 0', borderRadius:16, fontSize:13, fontWeight:700, color:'#fff', background:'linear-gradient(135deg,#2a9d8f,#3bbdad)', textDecoration:'none', transition:'box-shadow 0.2s',
            boxShadow: hov ? '0 8px 24px rgba(42,157,143,0.4)' : 'none' }}>
          <WaIcon/> Consultar
        </a>
      </div>
    </div>
  );
}
