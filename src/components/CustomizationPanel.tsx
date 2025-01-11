import { Input, Divider, Switch, Radio, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export const CustomizationPanel = () => {
  return (
    <div className='customisation-panel__wrapper d-flex flex-column gap-3 p-3'>
      <Input placeholder='Seacr your city'/>

      <Divider orientation="left">Labels</Divider>
      <Input placeholder='Title'/>
      <Input placeholder='Subtitle'/>
      <Input placeholder='Tagline'/>
      <div className='align-self-end'>
        <p className='d-inline me-2'>Labels:</p><Switch defaultChecked /></div>

      <Divider orientation="left">Styles</Divider>

      <div className='d-flex justify-content-start flex-wrap gap-3'>
        <img className='map-style__icon rounded-circle' src="https://picsum.photos/200" alt="" />
        <img className='map-style__icon rounded-circle' src="https://picsum.photos/200" alt="" />
        <img className='map-style__icon rounded-circle' src="https://picsum.photos/200" alt="" />
        <img className='map-style__icon rounded-circle' src="https://picsum.photos/200" alt="" />
        <img className='map-style__icon rounded-circle' src="https://picsum.photos/200" alt="" />
        <img className='map-style__icon rounded-circle' src="https://picsum.photos/200" alt="" />
      </div>

      <Divider orientation="left">Size</Divider>

      <Radio.Group buttonStyle="solid" size='large' defaultValue="30x40">
        <Radio.Button value="21x30">21x30</Radio.Button>
        <Radio.Button value="30x40">30x40</Radio.Button>
        <Radio.Button value="40x50">40x50</Radio.Button>
        <Radio.Button value="50x70">50x70</Radio.Button>
      </Radio.Group>

      <Button block type="primary" size='large' icon={<DownloadOutlined />}>
        Download
      </Button>
    </div>
  )
}
