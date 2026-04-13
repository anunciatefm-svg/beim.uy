import { useState, useMemo } from 'react';
import { products, MODELS, STORAGE } from '../data/products';
import ProductCard from './ProductCard';

export default function Catalog() {
  const [search, setSearch] = useState('');
  const [model, setModel] = useState('Todos');
  const [storage, setStorage] = useState('Todos');
  const [sort, setSort] = useState<'default'|'asc'|'desc'>('default');

  const filtered = useMemo(() => {
    let list = [...products];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.color.toLowerCase().includes(q) || p.storage.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)));
    }
    if (model !== 'Todos') list = list.filter(p => p.model === model);
    if (storage !== 'Todos') list = list.filter(p => p.storage === storage);
    if (sort === 'asc') list.sort((a,b) => a.price - b.price);
    if (sort === 'desc') list.sort((a,b) => b.price - a.price);
    return list;
  }, [search, model, storage, sort]);

  const hasFilters = search || model !== 'Todos' || storage !== 'Todos' || sort !== 'default';
  const clear = () => { setSearch(''); setModel('Todos'); setStorage('Todos'); setSort('default'); };

  const inputStyle: React.CSSProperties = { padding:'8px 12px', borderRadius:12, border:'1px solid #e5e7eb', fontSize:12, fontWeight:600, color:'#6b7280', outline:'none', cursor:'pointer', background:'#fff' };

  return (
    <section id="catalogo" style={{ padding:'80px 0', background:'#f8fffe' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:48 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'6px 16px', borderRadius:999, fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', background:'rgba(42,157,143,0.08)', border:'1px solid rgba(42,157,143,0.2)', color:'#2a9d8f', marginBottom:16 }}>
            Catálogo 2025
          </div>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:900, color:'#1a2332', marginBottom:12 }}>Todos los modelos</h2>
          <p style={{ color:'#6b7280', fontSize:16 }}>Stock disponible. Precios en dólares. Consultá por el tuyo.</p>
        </div>

        {/* Search */}
        <div style={{ maxWidth:640, margin:'0 auto 24px', position:'relative' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, background:'#fff', borderRadius:18, padding:'12px 20px', boxShadow:'0 2px 16px rgba(0,0,0,0.06)', border:'1px solid #e5e7eb', transition:'all 0.2s' }}
            onFocusCapture={e => (e.currentTarget.style.borderColor='#2a9d8f')}
            onBlurCapture={e => (e.currentTarget.style.borderColor='#e5e7eb')}>
            <svg width="18" height="18" fill="none" stroke="#2a9d8f" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar modelo, color, almacenamiento..."
              style={{ flex:1, outline:'none', border:'none', fontSize:14, color:'#1a2332', background:'transparent' }}/>
            {search && <button onClick={() => setSearch('')} style={{ background:'none', border:'none', cursor:'pointer', color:'#9ca3af', display:'flex', padding:0 }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>}
          </div>
        </div>

        {/* Filters */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:24, alignItems:'center' }}>
          {MODELS.map(m => (
            <button key={m} onClick={() => setModel(m)}
              style={{ padding:'7px 14px', borderRadius:12, fontSize:12, fontWeight:600, cursor:'pointer', transition:'all 0.2s', border:'none',
                background: model===m ? 'linear-gradient(135deg,#2a9d8f,#3bbdad)' : '#fff',
                color: model===m ? '#fff' : '#6b7280',
                boxShadow: model===m ? '0 4px 12px rgba(42,157,143,0.3)' : '0 1px 4px rgba(0,0,0,0.06)',
              }}>
              {m === 'Todos' ? 'Todos' : m}
            </button>
          ))}
          <div style={{ marginLeft:'auto', display:'flex', gap:8 }}>
            <select value={storage} onChange={e => setStorage(e.target.value)} style={inputStyle}>
              {STORAGE.map(s => <option key={s} value={s}>{s === 'Todos' ? 'Almacenamiento' : s}</option>)}
            </select>
            <select value={sort} onChange={e => setSort(e.target.value as typeof sort)} style={inputStyle}>
              <option value="default">Ordenar</option>
              <option value="asc">Precio: menor</option>
              <option value="desc">Precio: mayor</option>
            </select>
            {hasFilters && <button onClick={clear} style={{ ...inputStyle, color:'#dc2626', borderColor:'#fca5a5', cursor:'pointer' }}>Limpiar</button>}
          </div>
        </div>

        <div style={{ fontSize:13, color:'#9ca3af', marginBottom:24 }}>
          {filtered.length} producto{filtered.length !== 1 ? 's' : ''}
          {hasFilters && <span style={{ color:'#2a9d8f', marginLeft:4 }}>· filtros activos</span>}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign:'center', padding:'80px 0', color:'#9ca3af' }}>
            <div style={{ fontSize:48, marginBottom:12 }}>🔍</div>
            <p style={{ fontSize:16, fontWeight:600 }}>No encontramos resultados</p>
            <button onClick={clear} style={{ marginTop:12, color:'#2a9d8f', background:'none', border:'none', cursor:'pointer', textDecoration:'underline', fontSize:14 }}>Limpiar filtros</button>
          </div>
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:24 }}>
            {filtered.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{ marginTop:64, textAlign:'center' }}>
          <div style={{ display:'inline-flex', flexWrap:'wrap', alignItems:'center', gap:20, background:'#fff', borderRadius:24, padding:'24px 32px', boxShadow:'0 2px 15px rgba(0,0,0,0.06)', border:'1px solid #f3f4f6' }}>
            <div style={{ textAlign:'left' }}>
              <div style={{ fontWeight:700, color:'#1a2332', fontSize:15 }}>¿No encontrás lo que buscás?</div>
              <div style={{ fontSize:13, color:'#9ca3af' }}>Consultanos por modelos no listados</div>
            </div>
            <a href="https://wa.me/59892514774?text=Hola!%20Quiero%20consultar%20sobre%20un%20iPhone" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex', alignItems:'center', gap:8, padding:'12px 24px', borderRadius:16, fontSize:13, fontWeight:700, color:'#fff', background:'linear-gradient(135deg,#2a9d8f,#3bbdad)', textDecoration:'none' }}>
              Escribinos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
