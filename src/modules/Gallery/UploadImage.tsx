import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Input, Modal, Space, Upload, message } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import Checking from "../shared/components/Checking";
import Lottie from "react-lottie";
import waiting from "../../assets/img/waiting.json";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export default function UploadImage() {
  const [openUpload, setOpenUpload] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [listImages, setListImages] = useState<any>([]);
  const [showTick, setShowTick] = useState(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const handleAllImages = async () => {
    const images = fileList.map(async (file) => {
      if (!file.preview && file.originFileObj) {
        file.preview = await getBase64(file.originFileObj as FileType);
      }
      return file.preview || file.url;
    });
    const previews = await Promise.all(images);
    setListImages(previews);
  };

  useEffect(() => {
    handleAllImages();
  }, [fileList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      {
        showTick && message.success("User is Successfully LoggedIn.");
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [showTick]);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: waiting,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="flex flex-col mt-10 gap-y-6">
        <div className="flex justify-center text-center font-semibold font-mono">
          <p>
            Upload 9 images from your gallery. Upload at least one image of
            yourself. Upload images that you can relaten to each other or to
            yourself, that is, picture of family, friends, friends of friends,
            pets, etc. Then press the green button. And when you're ready press
            the red button.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          {/* {fileList.length === 9 ? (
            <div className="flex justify-center gap-x-10">
              <Button type="primary" size="large" danger>
                ESTABLISH RELATIONS
              </Button>
              <Button size="large" className=" bg-green-500 hover:bg-green-700">
                CREATE RELATION TYPE
              </Button>
            </div>
          ) : ( */}
          <div className="flex justify-center">
            <Button
              size="large"
              type="primary"
              onClick={(e) => {
                e.preventDefault();
                setOpenUpload(true);
              }}
              disabled = {fileList.length === 9 ? true : false}
            >
              UPLOAD IMAGES
            </Button>
          </div>
          {/* )} */}
        </div>
        {listImages.length === 9 ? (
          <div className="flex flex-col justify-center gap-y-8">
            <div className="flex justify-center gap-x-16 ">
              <div className="flex justify-center gap-x-20 ">
                <Card
                  style={{ width: 200, height: 200 }}
                  cover={
                    <img
                      alt="example"
                      src={listImages[0]}
                      style={{ borderRadius: 10 }}
                    />
                  }
                />
                <Card
                  style={{ width: 200, height: 200 }}
                  cover={
                    <img
                      alt="example"
                      src={listImages[1]}
                      style={{ borderRadius: 10 }}
                    />
                  }
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-center gap-x-8">
                  <Input />
                  {!showTick ? (
                    <></>
                  ) : (
                    <Checking time={5000} checked={showTick} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-x-16 ">
              <div className="flex justify-center gap-x-20 ">
                <Card
                  style={{ width: 200, height: 200 }}
                  cover={
                    <img
                      alt="example"
                      src={listImages[2]}
                      style={{ borderRadius: 10 }}
                    />
                  }
                />
                <Card
                  style={{ width: 200, height: 200 }}
                  cover={
                    <img
                      alt="example"
                      src={listImages[3]}
                      style={{ borderRadius: 10 }}
                    />
                  }
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-center gap-x-8">
                  <Input />
                  {!showTick ? (
                    <></>
                  ) : (
                    <Checking time={4000} checked={showTick} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-x-16 ">
              <div className="flex justify-center gap-x-20 ">
                <Card
                  style={{ width: 200, height: 200 }}
                  cover={
                    <img
                      alt="example"
                      src={listImages[4]}
                      style={{ borderRadius: 10 }}
                    />
                  }
                />
                <Card
                  style={{ width: 200, height: 200 }}
                  cover={
                    <img
                      alt="example"
                      src={listImages[5]}
                      style={{ borderRadius: 10 }}
                    />
                  }
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-center gap-x-8">
                  <Input />
                  {!showTick ? <></> : <Checking time={5} checked={showTick} />}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-x-16 ">
              <div className="flex justify-center gap-x-20 ">
                <Card
                  style={{ width: 200, height: 200 }}
                  cover={
                    <img
                      alt="example"
                      src={listImages[6]}
                      style={{ borderRadius: 10 }}
                    />
                  }
                />
                <Card
                  style={{ width: 200, height: 200 }}
                  cover={
                    <img
                      alt="example"
                      src={listImages[7]}
                      style={{ borderRadius: 10 }}
                    />
                  }
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-center gap-x-8">
                  <Input />
                  {!showTick ? (
                    <></>
                  ) : (
                    <Checking time={3000} checked={showTick} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-x-24 ">
              <div className="flex justify-center gap-x-20 ">
                <Card
                  style={{ width: 200, height: 200 }}
                  cover={
                    <img
                      alt="example"
                      src={listImages[8]}
                      style={{ borderRadius: 10 }}
                    />
                  }
                />
                {/* <Card
              style={{ width: 200, height:200 }}
              cover={<img alt="example" src={listImages[1]} style={{borderRadius:10}}/>}
              
            /> */}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-center gap-x-8">
                  <Input />
                  {!showTick ? (
                    <></>
                  ) : (
                    <Checking time={6000} checked={showTick} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-6">
              <Button
                type="primary"
                size="large"
                onClick={() => setShowTick(true)}
              >
                SUBMIT
              </Button>
            </div>
            {/* <div className=" grid grid-cols-2 gap-3">
          {listImages?.map((file: any) => (
            <Card
              style={{ width: 300, height:300 }}
              cover={<img alt="example" src={file} style={{borderRadius:10}}/>}
              
            />
          ))}
          {/* <Upload
            //   action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            className="custom-upload"
          /> 
        </div> */}
          </div>
        ) : (
          <Lottie options={defaultOptions} height={500} width={600} />
        )}
      </div>
      <Modal
        title={`Upload ${fileList.length}/9 Images`}
        centered
        open={openUpload}
        onCancel={() => setOpenUpload(false)}
        footer={
          <Space>
            <Button type="primary" onClick={() => setOpenUpload(false)}>
              OK
            </Button>
          </Space>
        }
      >
        <Upload
          //   action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 9 ? null : uploadButton}
        </Upload>
      </Modal>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        centered
        onCancel={() => setPreviewOpen(false)}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}
