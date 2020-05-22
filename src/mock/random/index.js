/*
    ## Mock.Random
    
    工具类，用于生成各种随机数据。
*/
import Util from '../util'

import basic from './basic'
import date from './date'
import image from './image'
import color from './color'
import text from './text'
import name from './name'
import web from './web'
import address from './address'
import helper from './helper'
import misc from './misc'

var Random = {
  extend: Util.extend,
  ...basic,
  ...date,
  ...image,
  ...color,
  ...text,
  ...name,
  ...web,
  ...address,
  ...helper,
  ...misc,
}

export default Random
