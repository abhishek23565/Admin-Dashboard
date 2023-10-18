import Classes from './Dashboard.module.scss';
import {CiSearch} from 'react-icons/ci';
import {CgNotes} from 'react-icons/cg';
import {TbShoppingBag} from 'react-icons/tb';
import {RiExchangeDollarLine, RiWallet3Line} from 'react-icons/ri';
import sunMountain from '../../../Assets/sunMountain.jpg';
import greenMountain from '../../../Assets/greenMountain.jpg';

const Dashboard = () => {

  const productsData = [
    {
      id: 1,
      name: 'Abstract 3D',
      desc: 'lorem ipsum dolor sit amet, consetectur adipscising elit.',
      image: sunMountain,
      stock: 32,
      price: 45.99,
      totalSales: 20
    },
    {
      id: 2,
      name: 'Sarphens Illustration',
      desc: 'lorem ipsum dolor sit amet, consetectur adipscising elit.',
      image: greenMountain,
      stock: 32,
      price: 45.99,
      totalSales: 20
    }
  ]

  const chartData = [
    {
      id: 1,
      month: 'Jan',
      barHeight: '100px',
      fillHeight: '0px'
    },
    {
      id: 2,
      month: 'Feb',
      barHeight: '80px',
      fillHeight: '0px'
    },
    {
      id: 3,
      month: 'Mar',
      barHeight: '250px',
      fillHeight: '0px'
    },
    {
      id: 4,
      month: 'Apr',
      barHeight: '90px',
      fillHeight: '0px'
    },
    {
      id: 5,
      month: 'May',
      barHeight: '150px',
      fillHeight: '0px'
    },
    {
      id: 6,
      month: 'Jun',
      barHeight: '200px',
      fillHeight: '0px'
    },
    {
      id: 7,
      month: 'Jul',
      barHeight: '160px',
      fillHeight: '0px'
    },
    {
      id: 8,
      month: 'Aug',
      barHeight: '250px',
      fillHeight: '100%'
    },
    {
      id: 9,
      month: 'Sep',
      barHeight: '210px',
      fillHeight: '0px'
    },
    {
      id: 10,
      month: 'Oct',
      barHeight: '155px',
      fillHeight: '0px'
    },
    {
      id: 11,
      month: 'Nov',
      barHeight: '130px',
      fillHeight: '0px'
    },
    {
      id: 12,
      month: 'Dec',
      barHeight: '135px',
      fillHeight: '0px'
    }
  ];

  const cardsData = [
    {
      id: 1,
      icon: <RiExchangeDollarLine/>,
      mutedText: 'Earnings',
      heading: 198,
      color: 'rgb(49, 161, 49)',
      lossProfit: '↑37.8%',
      normalText: ' this month'
    },
    {
      id: 2,
      icon: <CgNotes/>,
      mutedText: 'Orders',
      heading: 2.4,
      color: 'red',
      lossProfit: '↓2%',
      normalText: ' this month'
    },
    {
      id: 3,
      icon: <RiWallet3Line/>,
      mutedText: 'Balance',
      heading: 2.4,
      color: 'red',
      lossProfit: '↓2%',
      normalText: ' this month'
    },
    {
      id: 4,
      icon: <TbShoppingBag/>,
      mutedText: 'Total Sales',
      heading: 89,
      color: 'rgb(49, 161, 49)',
      lossProfit: '↑11%',
      normalText: ' this week'
    }
  ]

  return (
    <div className={`${Classes['dashboard-container']}`}>

      {/* dashboard header section HTML */}
      <div className={`${Classes['dashboard-header']} ${Classes['sp-btwn-d-flex']}`}>
        <div className={`${Classes['d-header-heading-container']}`}>
          <h3>Hello Shahrukh,</h3>
        </div>
        <div className={`${Classes['d-header-input-container']} ${Classes['d-flex-align-center']}`}>
          <CiSearch/>
          <input type="search" placeholder="Search"/>
        </div>
      </div> 

      {/* dashboard cards section HTML */}
      <div className={`${Classes['my-row']} ${Classes['sp-btwn-d-flex']}`}>
        {
          cardsData.map((item, index)=>{
            return (
              <div key={item.id} className={`${Classes['my-col-3']} ${Classes['d-flex-align-center']}`}>
                <div className={`${Classes['my-icon']} ${Classes['my-icon'+`${index+1}`]}`}>
                  {item.icon}
                </div>
                <div className={`${Classes['my-text']}`}>
                  <p className={`${Classes['muted-text']}`}>{item.mutedText}</p>
                  <h3>${item.heading}k</h3>
                  <p><b style={{color: item.color}}>{item.lossProfit}</b>{item.normalText}</p>
                </div>          
              </div>
            );
          })
        }
      </div>

      {/* dashboard overview and customer section HTML */}
      <div className={`${Classes['overcus-container']}`}>
        <div className={`${Classes['overview-container']}`}>
          <div className={`${Classes['overview-header']} ${Classes['sp-btwn-d-flex']}`}>
            <div className={`${Classes['overview-header-left']}`}>
              <h3>Overview</h3>
              <p className={`${Classes['muted-text']}`}>Monthly Income</p>
            </div>
            <div className={`${Classes['overview-header-right']}`}>
              <select>
                <option>Quarterly</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>            
          </div>
          <div className={`${Classes['overview-chart']}`}>
            {chartData.map((item)=>{
              return (
                <div key={item.id}>
                  <div style={{height: item.barHeight}} className={`${Classes['chart-bars']}`}>
                    <div style={{height: item.fillHeight}} className={`${Classes['chart-bars-inner']}`}></div>
                  </div>
                  <p>{item.month}</p>
                </div>
              ); 
            })}          
          </div>
        </div>

        <div className={`${Classes['customer-container']}`}>
          <div className={`${Classes['customer-heading']}`}>
            <h3>Customers</h3>
            <p className={`${Classes['muted-text']}`}>Customers that buy products</p>
          </div>
          <div className={`${Classes['circular-chart-container']}`}>
            <div className={`${Classes['circular-chart-inner-container']}`}>
              <div className={`${Classes['circular-chart-text']}`}>
                <h3>65%</h3>
                <p>Total new <br/> Customers</p>
              </div>

              <div className={`${Classes['circular-chart-svg']}`}>
                <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#ddd" strokeWidth="20"></circle>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#1a6aa1" strokeWidth="30" strokeDasharray="200" transform="rotate(30 100 100)"></circle>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#eecce2" strokeWidth="40" strokeDasharray="70, 280" transform="rotate(50 100 100)"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* dashboard product sell section HTML */}
      <div className={`${Classes['product-container']}`}>
        <div className={`${Classes['p-header']} ${Classes['sp-btwn-d-flex']}`}>
          <div className={`${Classes['p-header-left']}`}>
            <h3>Product Sell</h3>
          </div>
          <div className={`${Classes['p-header-right']} ${Classes['d-flex-align-center']}`}>
            <div className={`${Classes['p-header-input-container']} ${Classes['d-flex-align-center']}`}>
              <CiSearch/>
              <input type="search" placeholder="Search"/>
            </div>
            <div className={`${Classes['p-header-select-container']}`}>
              <select>
                <option>Last 30 days</option>
                <option>last one week</option>
                <option>Yesterday</option>
                <option>Since this year</option>
              </select>
            </div>
          </div>
        </div>

        <div className={`${Classes['my-product-table']}`}>
          <div className={`${Classes['mpt-header']} ${Classes['sp-btwn-d-flex']}`}>
            <div className={`${Classes['mpth-left']}`}>
              <p className={`${Classes['muted-text']}`}>Product Name</p>
            </div>
            <div className={`${Classes['mpth-right']} ${Classes['sp-btwn-d-flex']}`}>
              <p className={`${Classes['muted-text']}`}>Stock</p>
              <p className={`${Classes['muted-text']}`}>Price</p>
              <p className={`${Classes['muted-text']}`}>Total Sales</p>
            </div>
          </div>
          {
            productsData.map((product)=>{
              return (
                <div key={product.id} className={`${Classes['mpt-header']} ${Classes['sp-btwn-d-flex']} ${Classes['border-none']}`}>
                  <div className={`${Classes['mpth-left']} ${Classes['d-flex-align-center']}`}>
                    <div className={`${Classes['mpth-left-image']}`}>
                      <img src={product.image} alt="My Product" />
                    </div>
                    <div className={`${Classes['mpth-left-text']}`}>
                      <h4>{product.name}</h4>
                      <p className={`${Classes['muted-text']}`}>{product.desc}</p>
                    </div>
                  </div>
                  <div className={`${Classes['mpth-right']} ${Classes['sp-btwn-d-flex']}`}>
                    <p>{product.stock} in stock</p>
                    <p>${product.price}</p>
                    <p>{product.totalSales}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div> 
    </div>
  )
}

export default Dashboard;
