import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Button } from "components/Button";

const CoverPage = () => {
  return (
    <Column className="bg-bluegray_900 items-center justify-end ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[571px] 2xl:mb-[65px] 2xl:ml-[17px] 2xl:mr-[154px] 2xl:mt-[85px] 3xl:h-[685px] 3xl:mb-[78px] 3xl:ml-[20px] 3xl:mr-[185px] 3xl:mt-[102px] h-[1120.03px] lg:h-[444px] lg:mb-[50px] lg:ml-[13px] lg:mr-[120px] lg:mt-[66px] mb-[127.96997px] ml-[33.58px] mr-[304.1599px] mt-[167px] w-[88%] xl:h-[507px] xl:mb-[57px] xl:ml-[15px] xl:mr-[137px] xl:mt-[75px]">
        <Row className="absolute h-[max-content] inset-[0] justify-center m-[auto] px-[0] w-[100%]">
          <Image
            src="img_ellipse.png"
            className="2xl:h-[59px] 2xl:mb-[440px] 2xl:mt-[51px] 3xl:h-[70px] 3xl:mb-[528px] 3xl:mt-[61px] h-[114.16px] lg:h-[46px] lg:mb-[342px] lg:mt-[39px] mb-[865.01px] mt-[100.82999px] object-contain w-[13%] xl:h-[52px] xl:mb-[391px] xl:mt-[45px]"
            alt="Ellipse"
          />
          <Stack className="2xl:h-[550px] 3xl:h-[660px] bg-black_900 h-[1080px] lg:h-[428px] mr-[1px] rounded-radius50 shadow-bs w-[73%] xl:h-[489px]">
            <Column className="absolute items-center justify-start left-[0] w-[79%]">
              <Stack className="2xl:h-[550px] 3xl:h-[660px] font-sfprodisplay h-[1080px] lg:h-[428px] self-stretch w-[100%] xl:h-[489px]">
                <Column className="absolute bottom-[0] justify-start left-[0] w-[86%]">
                  <Column className="items-end self-stretch w-[100%]">
                    <Text className="2xl:ml-[5px] 3xl:ml-[6px] lg:ml-[3px] ml-[10px] xl:ml-[4px]"></Text>
                    <Line className="2xl:mt-[456px] 2xl:mx-[37px] 3xl:mt-[548px] 3xl:mx-[44px] bg-gray_800_6c h-[1px] lg:mt-[354px] lg:mx-[28px] mt-[897px] mx-[73px] opacity-op3 rounded-radius40 w-[72%] xl:mt-[406px] xl:mx-[33px]" />
                  </Column>
                  <div className="2xl:mr-[5px] 2xl:mt-[463px] 3xl:mr-[6px] 3xl:mt-[556px] bg-gradient  h-[1px] lg:mr-[3px] lg:mt-[360px] mr-[10px] mt-[911px] opacity-op2 rounded-radius4555 w-[41%] xl:mr-[4px] xl:mt-[412px]"></div>
                  <Column className="2xl:mt-[483px] 3xl:mt-[580px] font-sfprodisplay items-end lg:mt-[375px] mt-[950px] self-stretch w-[100%] xl:mt-[430px]">
                    <Text className="2xl:mx-[151px] 2xl:text-fs24 3xl:mx-[182px] 3xl:text-fs29 font-bold lg:mx-[117px] lg:text-fs18 mx-[298px] text-fs48 text-left text-white_A700 xl:mx-[134px] xl:text-fs21">{`Get in touch with us`}</Text>
                    <Text className="2xl:mt-[540px] 2xl:mx-[144px] 2xl:text-fs7 3xl:mt-[648px] 3xl:mx-[172px] 3xl:text-fs8 font-medium lg:mt-[419px] lg:mx-[112px] lg:text-fs5 mt-[1061px] mx-[283px] text-center text-fs14 text-white_A700 xl:mt-[480px] xl:mx-[128px] xl:text-fs6">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.`}</Text>
                  </Column>
                </Column>
                <Column className="absolute bottom-[0] justify-start right-[0] w-[47%]">
                  <Column className="items-end self-stretch w-[100%]">
                    <div className="2xl:h-[133px] 2xl:ml-[5px] 3xl:h-[160px] 3xl:ml-[6px] bg-gradient  h-[261px] lg:h-[104px] lg:ml-[3px] ml-[10px] opacity-op42 rounded-radius1305 w-[51%] xl:h-[119px] xl:ml-[4px]"></div>
                  </Column>
                  <Text className="2xl:mr-[5px] 2xl:mt-[182px] 2xl:text-fs24 3xl:mr-[6px] 3xl:mt-[218px] 3xl:text-fs29 font-bold lg:mr-[3px] lg:mt-[141px] lg:text-fs18 mr-[10px] mt-[358px] text-fs48 text-left text-white_A700 xl:mr-[4px] xl:mt-[162px] xl:text-fs21">
                    <span className="text-indigo_200 text-fs48 font-sfprodisplay text-left font-bold lg:text-fs18 xl:text-fs21 2xl:text-fs24 3xl:text-fs29">
                      <>{`Build`}</>
                    </span>
                    <span className="text-white_A700 text-fs48 font-sfprodisplay text-left font-bold lg:text-fs18 xl:text-fs21 2xl:text-fs24 3xl:text-fs29">
                      <>{` a whole new world`}</>
                    </span>
                  </Text>
                  <Text className="2xl:mr-[5px] 2xl:mt-[211px] 2xl:text-fs7 3xl:mr-[6px] 3xl:mt-[253px] 3xl:text-fs8 font-medium lg:mr-[3px] lg:mt-[164px] lg:text-fs5 mr-[10px] mt-[415px] text-fs14 text-left text-white_A700 xl:mr-[4px] xl:mt-[187px] xl:text-fs6">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.`}</Text>
                </Column>
                <Stack className="2xl:bottom-[129px] 2xl:h-[268px] 3xl:bottom-[155px] 3xl:h-[322px] absolute bottom-[254px] h-[526px] left-[0] lg:bottom-[100px] lg:h-[209px] w-[42%] xl:bottom-[114px] xl:h-[239px]">
                  <Text className="2xl:text-fs24 3xl:text-fs29 absolute font-bold leading-lh lg:text-fs18 right-[0] text-fs48 text-left text-white_A700 top-[0] w-[86%] xl:text-fs21">
                    <span className="text-indigo_200 text-fs48 font-sfprodisplay text-left font-bold lg:text-fs18 xl:text-fs21 2xl:text-fs24 3xl:text-fs29">
                      <>{`Explore`}</>
                    </span>
                    <span className="text-white_A700 text-fs48 font-sfprodisplay text-left font-bold lg:text-fs18 xl:text-fs21 2xl:text-fs24 3xl:text-fs29">
                      <>{` the fascinating world of VR`}</>
                    </span>
                  </Text>
                  <Column className="absolute bg-gradient  bottom-[0] font-sfprodisplay items-center justify-start left-[0] opacity-op42 rounded-radius2285 w-[35%]">
                    <Button className="2xl:mb-[159px] 2xl:ml-[41px] 2xl:mr-[20px] 2xl:mt-[60px] 2xl:px-[7px] 2xl:py-[2px] 2xl:text-fs7 3xl:mb-[191px] 3xl:ml-[49px] 3xl:mr-[25px] 3xl:mt-[72px] 3xl:px-[8px] 3xl:py-[3px] 3xl:text-fs8 bg-transparent border border-solid border-white_A700 font-medium lg:mb-[124px] lg:ml-[32px] lg:mr-[16px] lg:mt-[46px] lg:px-[5px] lg:py-[2px] lg:text-fs5 mb-[314px] ml-[81px] mr-[41px] mt-[118px] px-[14px] py-[5.205px] rounded-radius6 shadow-bs1 text-center text-fs14 text-white_A700 w-[42%] xl:mb-[142px] xl:ml-[36px] xl:mr-[18px] xl:mt-[53px] xl:px-[6px] xl:py-[2px] xl:text-fs6">{`Click here`}</Button>
                  </Column>
                </Stack>
                <Text className="2xl:left-[41px] 2xl:text-fs7 2xl:top-[212px] 3xl:left-[49px] 3xl:text-fs8 3xl:top-[255px] absolute font-medium leading-lh left-[81px] lg:left-[32px] lg:text-fs5 lg:top-[165px] text-fs14 text-left text-white_A700 top-[418px] w-[33%] xl:left-[36px] xl:text-fs6 xl:top-[189px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum. Etiam interdum nulla neque, eu elementum arcu fermentum vel.`}</Text>
                <Row className="absolute justify-between px-[0] right-[0] top-[0] w-[95%]">
                  <Image
                    src="img_group.svg"
                    className="2xl:h-[22px] 2xl:mb-[337px] 2xl:mt-[16px] 2xl:w-[21px] 3xl:h-[27px] 3xl:mb-[405px] 3xl:mt-[20px] 3xl:w-[26px] h-[43px] lg:h-[18px] lg:mb-[262px] lg:mt-[13px] lg:w-[17px] mb-[663px] mt-[33px] object-contain w-[43px] xl:h-[20px] xl:mb-[300px] xl:mt-[14px] xl:w-[19px]"
                    alt="Group"
                  />
                  <Stack className="2xl:h-[377px] 3xl:h-[452px] font-sfprodisplay h-[739px] lg:h-[293px] w-[68%] xl:h-[335px]">
                    <Column className="absolute bg-gradient  justify-start right-[0] rounded-radius2935 top-[0] w-[67%]">
                      <Button className="2xl:mt-[24px] 2xl:mx-[34px] 2xl:px-[7px] 2xl:py-[2px] 2xl:text-fs7 3xl:mt-[29px] 3xl:mx-[41px] 3xl:px-[8px] 3xl:py-[3px] 3xl:text-fs8 bg-transparent border border-solid border-white_A700 font-medium lg:mt-[19px] lg:mx-[26px] lg:px-[5px] lg:py-[2px] lg:text-fs5 mt-[49px] mx-[68px] px-[14px] py-[5.205px] rounded-radius6 shadow-bs1 text-center text-fs14 text-white_A700 w-[12%] xl:mt-[22px] xl:mx-[30px] xl:px-[6px] xl:py-[2px] xl:text-fs6">{`Sign up`}</Button>
                      <div className="2xl:h-[51px] 2xl:mb-[176px] 2xl:mt-[34px] 2xl:mx-[53px] 3xl:h-[61px] 3xl:mb-[211px] 3xl:mt-[41px] 3xl:mx-[63px] border-bw10 border-solid h-[99.22px] lg:h-[40px] lg:mb-[136px] lg:mt-[26px] lg:mx-[41px] mb-[345.78px] ml-[104.41px] mr-[104.40991px] mt-[68px] opacity-op4 rounded-radius4961 w-[42%] xl:h-[45px] xl:mb-[156px] xl:mt-[30px] xl:mx-[47px]"></div>
                    </Column>
                    <Image
                      src="img_image.png"
                      className="2xl:h-[280px] 2xl:right-[47px] 3xl:h-[335px] 3xl:right-[56px] absolute bottom-[0] h-[548px] lg:h-[217px] lg:right-[36px] object-contain right-[93px] w-[71%] xl:h-[249px] xl:right-[42px]"
                      alt="Image"
                    />
                    <Row className="2xl:top-[24px] 3xl:top-[29px] absolute font-sfprodisplay items-center justify-between left-[0] lg:top-[19px] px-[0] top-[49px] w-[45%] xl:top-[22px]">
                      <Text className="2xl:text-fs7 3xl:text-fs8 font-medium lg:text-fs5 text-fs14 text-left text-white_A700 xl:text-fs6">{`Home`}</Text>
                      <Text className="2xl:text-fs7 3xl:text-fs8 font-medium lg:text-fs5 text-fs14 text-left text-white_A700 xl:text-fs6">{`Services`}</Text>
                      <Text className="2xl:text-fs7 3xl:text-fs8 font-medium lg:text-fs5 text-fs14 text-left text-white_A700 xl:text-fs6">{`About us`}</Text>
                      <Text className="2xl:text-fs7 3xl:text-fs8 font-medium lg:text-fs5 text-fs14 text-left text-white_A700 xl:text-fs6">{`Contact us`}</Text>
                    </Row>
                  </Stack>
                </Row>
              </Stack>
              <Row className="2xl:mt-[77px] 3xl:mt-[92px] font-sfprodisplay justify-start lg:mt-[59px] mt-[151.41003px] self-stretch w-[100%] xl:mt-[68px]">
                <Image
                  src="img_image_1.png"
                  className="2xl:h-[258px] 2xl:ml-[60px] 3xl:h-[309px] 3xl:ml-[72px] h-[505.59px] lg:h-[201px] lg:ml-[46px] ml-[118.33002px] object-contain w-[36%] xl:h-[229px] xl:ml-[53px]"
                  alt="Image"
                />
                <Button className="2xl:ml-[20px] 2xl:mr-[344px] 2xl:mt-[507px] 2xl:pt-[2px] 2xl:px-[7px] 2xl:text-fs7 3xl:ml-[25px] 3xl:mr-[413px] 3xl:mt-[609px] 3xl:pt-[3px] 3xl:px-[8px] 3xl:text-fs8 bg-transparent border border-solid border-white_A700 font-medium lg:ml-[16px] lg:mr-[267px] lg:mt-[394px] lg:pt-[2px] lg:px-[5px] lg:text-fs5 ml-[41px] mr-[676px] mt-[997.58997px] pb-[1px] pt-[5.205px] px-[14px] rounded-radius6 shadow-bs1 text-center text-fs14 text-white_A700 w-[6%] xl:ml-[18px] xl:mr-[305px] xl:mt-[451px] xl:pt-[2px] xl:px-[6px] xl:text-fs6">{`Click here`}</Button>
              </Row>
            </Column>
            <Row className="2xl:top-[20px] 3xl:top-[25px] absolute justify-between lg:top-[16px] px-[0] right-[0] top-[41px] w-[66%] xl:top-[18px]">
              <Column className="2xl:mt-[57px] 3xl:mt-[69px] justify-start lg:mt-[44px] mt-[113px] w-[16%] xl:mt-[51px]">
                <Column className="items-end self-stretch w-[100%]">
                  <div className="2xl:h-[24px] 2xl:ml-[5px] 3xl:h-[28px] 3xl:ml-[6px] border-bw6 border-solid h-[45.28px] lg:h-[18px] lg:ml-[3px] ml-[10px] opacity-op7 rounded-radius2264 w-[58%] xl:h-[21px] xl:ml-[4px]"></div>
                </Column>
                <div className="2xl:h-[44px] 2xl:mr-[5px] 2xl:mt-[16px] 3xl:h-[52px] 3xl:mr-[6px] 3xl:mt-[19px] border-bw6 border-solid h-[84.93px] lg:h-[34px] lg:mr-[3px] lg:mt-[12px] mr-[10px] mt-[32.640015px] rounded-radius42465 w-[56%] xl:h-[39px] xl:mr-[4px] xl:mt-[14px]"></div>
                <Column className="2xl:mt-[114px] 3xl:mt-[137px] items-end lg:mt-[89px] mb-[1px] mt-[225.15px] self-stretch w-[100%] xl:mt-[101px]">
                  <div className="2xl:h-[15px] 2xl:mx-[20px] 3xl:h-[17px] 3xl:mx-[24px] border-4 border-solid h-[27.67px] lg:h-[11px] lg:mx-[16px] ml-[40.61px] mr-[40.609985px] opacity-op3 rounded-radius13835 w-[35%] xl:h-[13px] xl:mx-[18px]"></div>
                </Column>
              </Column>
              <div className="2xl:h-[206px] 2xl:mb-[63px] 3xl:h-[247px] 3xl:mb-[76px] border-bw27 border-solid h-[403.19px] lg:h-[160px] lg:mb-[49px] mb-[125.47998px] rounded-radius201595 w-[41%] xl:h-[183px] xl:mb-[56px]"></div>
            </Row>
          </Stack>
        </Row>
        <div className="2xl:h-[127px] 2xl:left-[122px] 3xl:h-[152px] 3xl:left-[147px] absolute border-bw20 border-solid bottom-[0] h-[248.47px] left-[241.23px] lg:h-[99px] lg:left-[95px] rounded-radius124235 w-[17%] xl:h-[113px] xl:left-[109px]"></div>
      </Stack>
    </Column>
  );
};

export default CoverPage;
