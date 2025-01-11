import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export const Description = () => {
  return (
    <div className="col-3 text-center p-3">
      <div className="fs-4 mb-3">Total: $44</div>
      <Button
        className="mb-3"
        block
        type="primary"
        size="large"
        icon={<DownloadOutlined />}
      >
        Download
      </Button>
      <Button className="mb-3" color="primary" variant="link" size="large">
        Save for later
      </Button>
      <div className="text-bold mb-3">City Map Poster</div> 
      <div className="fs-6 px-5">
        Using our custom-built map
        editor, choose from a wide variety of themes, colours and sizes.
      </div>
    </div>
  );
};
