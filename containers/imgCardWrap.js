import React, {useEffect} from 'react';
import ImgCard from '../components/imgCard/imgCard'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {getApiArticles, setArticleType, deleteArticleData} from '../actions'
import WithLoading from '../components/hoc/loader'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'space-between',
  },
  selector: {
    'font-size': 14,
    'font-weight': 200,
    cursor: 'pointer',
    color: '#9e9e9e',
    width: 63,
    height: 25,
    'border-radius': 10,
    display: 'flex',
    'justify-content': 'center',
    'align-items':'center',
  },
  checked:{
    background: '#2b2b2b',
    color: '#fff',
  },
  header:{
    width: 800,
    height: 35,
    display: 'flex',
    'margin-bottom': 20,
    'justify-content': 'space-between',
    'flex-wrap': 'wrap',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  title:{
    width: 100,
    height: 35,
    color: '#fff',
    'text-align': 'left',
    'font-size': 16,
    [theme.breakpoints.down('xs')]: {
      order:1,
    },
  },
  options:{
    display: 'flex',
    'justify-content': 'space-between',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      order: 3,
      'margin-top': 20,
    },
  },
  lineWrap:{
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      order: 2,
    },
  },
  lineLeft:{
    'border-bottom': '2px solid #e7008c',
    width: 100,
  },
  lineRight:{
    'border-bottom': '1px solid #fff',
    width: 'calc(100% - 100px)',
  }
}))

// 選項
const Selector = ({style, checked, text, handleClick}) => {
  const divStyle = `${style.selector} ${checked && style.checked}`
  return (
    <div className={divStyle} onClick={()=>handleClick(text)}>{text}</div>)
}

const SelectorItem = [
  {text: '全部'},
  {text: '專題'},
  {text: '影評'},
  {text: '新聞'},
]

const ImgCardWrap = (props) => {
  const classes = useStyles()
  const { article ,getApiArticles, setArticleType, deleteArticleData } = props

  const [checked, setChecked] = React.useState('全部');

  const handleClick = (item)=>{
    let type = ''

    switch(item) {
    case '專題':
      type = 'topic'
      break;
    case '影評':
      type = 'cinecism'
      break;
    case '新聞':
      type = 'news'
      break;
    default:
      type = ''
    }

    setChecked(item)
    setArticleType(type)
    // 把舊的 article 資料清掉
    deleteArticleData()
    // 讓 loading 效果出現
    setTimeout(()=>{
      getApiArticles(1, type)
    },3500)
  }

  useEffect(() => {
    // 讓 loading 效果出現
    setTimeout(()=>{
      getApiArticles(1)
    },3500)
  },[])

  const ImgCardWithLoading = WithLoading(ImgCard)

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>近期文章</div>
        <div className={classes.options}>
          {
            SelectorItem.map((item, idx)=>(
              <Selector 
                key={idx} 
                style={classes} 
                checked={checked == item.text} 
                text={item.text} 
                handleClick={handleClick}
              />
            ))
          }
        </div>
        <div className={classes.lineWrap}>
          <div className={classes.lineLeft}/>
          <div className={classes.lineRight}/>
        </div>
      </div>

      {(article.list ? article.list 
        : 
        Array.from(new Array(6))).map((item, idx) => {
        return <ImgCardWithLoading key={idx} item={item}/>
      })}
    </div>
  );
}

export default connect(
  state => ({
    article : state.api.data,
  }),
  dispatch => ({
    getApiArticles(val, type){
      dispatch(getApiArticles(val, type))
    },
    setArticleType(articleTyle){
      dispatch(setArticleType({articleTyle}))
    },
    deleteArticleData(){
      dispatch(deleteArticleData())
    }
  })
)(ImgCardWrap)