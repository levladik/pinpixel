import { Input, Divider, Switch, Radio } from 'antd';

export const CustomizationPanel = () => {
  return (
    <div className='customisation-panel__wrapper col-6 col-lg-4 p-3 d-grid gap-1'>
      <Input placeholder='Seacr your city'/>

      <Divider orientation="left">Labels</Divider>
      <Input placeholder='Title'/>
      <Input placeholder='Subtitle'/>
      <Input placeholder='Tagline'/>
      <div className='text-end'>
        <p className='d-inline me-2'>Labels:</p><Switch defaultChecked />
      </div>

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

      <div className='m-auto'>
        <Radio.Group buttonStyle="solid" size='large' defaultValue="30x40">
          <Radio.Button value="21x30">21x30</Radio.Button>
          <Radio.Button value="30x40">30x40</Radio.Button>
          <Radio.Button value="40x50">40x50</Radio.Button>
          <Radio.Button value="50x70">50x70</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  )
}
