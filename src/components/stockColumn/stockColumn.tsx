import "./stockColumn.css"


export function StockColumn () {
  
  return(
    <div className="stockColumn">
      <iframe id='st_818425f551bd4224b2785af3aa10203f' frameBorder='0' 
      title="stock" scrolling='no' width='100%' height='100%' src='https://api.stockdio.com/visualization/financial/charts/v1/MarketOverviewChart?app-key=A70DF516523B438A9E175093BD6A3A94&palette=Financial-Light&title=Market%20Overview&onload=st_818425f551bd4224b2785af3aa10203f'></iframe>
    </div>
  );
}