import { Box } from "@mui/material";
import { EnterpriseCardData } from "./EnterpriseCardData";
import { IStrapiEnterprise } from "../../../interfaces/strapi";
import { EnterpriseCardCarousel } from "./EnterpriseCardCarousel";
import { EnterpriseCardImageModel } from "./EnterpriseCardImageModel";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export interface IEnterpriseCardProps {
  enterprise: IStrapiEnterprise["attributes"];
}

export const EnterpriseCard = ({ enterprise }: IEnterpriseCardProps) => {
  const { sm } = useBreakpoint();

  const gridTemplateArea = {
    xs: `
    "image1 image2"
    "image3 image2"
    "image3 image4"
    "data data"
    `,
    sm: `
    "data data data carousel carousel"
    "data data data carousel carousel"
    "image1 image1 image2 image2 image3"
    "image4 image4 image2 image2 image3"
    `,
  };

  const gridTemplateColumns = {
    xs: "1fr 1fr",
    sm: ".25fr .5fr 1fr 1fr .75fr",
  };

  const gridTemplateRows = {
    xs: "15vh 7vh 15vh 1fr ",
    sm: "repeat(2, 130px) repeat(2, 100px)",
    md: "repeat(2, 130px) repeat(2, 100px)",
  };

  return (
    <Box>
      <Box
        display="grid"
        gridTemplateAreas={gridTemplateArea}
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateRows={gridTemplateRows}
        gap={{ xs: ".5rem", md: "1rem" }}
      >
        <EnterpriseCardData
          city={enterprise.Endereco.Cidade}
          name={enterprise.Nome}
          slug={enterprise.Slug}
          status={enterprise.Status}
          text={enterprise.Descricao1}
        />

        {sm && <EnterpriseCardCarousel photos={enterprise.Galeria.data} />}

        <EnterpriseCardImageModel
          gridArea="image1"
          src={enterprise.Galeria?.data?.[0].attributes.url ?? ""}
          alt={enterprise.Galeria?.data?.[0].attributes.url ?? ""}
        />
        <EnterpriseCardImageModel
          gridArea="image2"
          src={enterprise.Galeria?.data?.[1].attributes.url ?? ""}
          alt={enterprise.Galeria?.data?.[1].attributes.url ?? ""}
        />
        <EnterpriseCardImageModel
          gridArea="image3"
          src={enterprise.Galeria?.data?.[2]?.attributes.url ?? ""}
          alt={enterprise.Galeria?.data?.[2]?.attributes.url ?? ""}
        />
        <EnterpriseCardImageModel
          gridArea="image4"
          src={enterprise.Galeria?.data?.[3]?.attributes.url ?? ""}
          alt={enterprise.Galeria?.data?.[3]?.attributes.url ?? ""}
        />
      </Box>
    </Box>
  );

  // return (
  //   <Link
  //     href="/portfolio/[slug]"
  //     as={`/portfolio/${enterprise.Slug}`}
  //     passHref
  //   >
  //     <a>
  //       <Box sx={{ height: "fit-content", width: "100%", boxShadow }}>
  //         <Stack
  //           direction={{ xs: "column", md: "row" }}
  //           sx={{ height: "100%" }}
  //         >
  //           <Box sx={sxImage}>
  //             <Image
  //               src={enterprise.Thumb.data.attributes.url}
  //               alt={enterprise.Nome}
  //               objectFit="cover"
  //               width="100%"
  //               height="100%"
  //               layout="fill"
  //               objectPosition="left bottom"
  //             />
  //           </Box>
  //           <Box sx={sxInfos}>
  //             <Typography {...enterpriseNameProps}>
  //               {enterprise.Nome.toUpperCase()}
  //             </Typography>
  //             <Typography fontSize={16} fontWeight={500}>
  //               {getLocationString(enterprise)}
  //             </Typography>
  //             {enterprise.infosCardEmpreendimentos.Descricao2 && (
  //               <Typography fontSize={14} sx={{ whiteSpace: "pre-wrap" }}>
  //                 {enterprise.Descricao2}
  //               </Typography>
  //             )}
  //             {enterprise.infosCardEmpreendimentos.Descricao1 && (
  //               <Typography
  //                 fontSize={14}
  //                 sx={{ mt: "1rem", whiteSpace: "pre-wrap" }}
  //               >
  //                 {enterprise.Descricao1}
  //               </Typography>
  //             )}
  //             <Typography
  //               fontSize={15}
  //               fontWeight={700}
  //               sx={{
  //                 mt: { xs: "1rem", md: "auto" },
  //                 width: "fit-content",
  //                 color: "#1a47bc",
  //                 borderBottom: "1px solid #1A47BC",
  //               }}
  //             >
  //               SAIBA MAIS
  //             </Typography>
  //             <Box bgcolor={statusBgColorMemo} sx={sxStatus}>
  //               <Typography fontSize={13} letterSpacing={3}>
  //                 {enterprise.Status.toUpperCase()}
  //               </Typography>
  //             </Box>
  //           </Box>
  //         </Stack>
  //       </Box>
  //     </a>
  //   </Link>
  // );
};
