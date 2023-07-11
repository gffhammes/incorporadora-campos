import { Box, Stack } from "@mui/material";
import { EnterpriseCardData } from "./EnterpriseCardData";
import { IStrapiEnterprise } from "../../../interfaces/strapi";
import { EnterpriseCardCarousel } from "./EnterpriseCardCarousel";

export interface IEnterpriseCardProps {
  enterprise: IStrapiEnterprise["attributes"];
}

export const EnterpriseCard = ({ enterprise }: IEnterpriseCardProps) => {
  console.log(enterprise);

  return (
    <Box>
      <Stack>
        <Stack direction="row">
          <EnterpriseCardData
            city={enterprise.Endereco.Cidade}
            name={enterprise.Nome}
            slug={enterprise.Slug}
            status={enterprise.Status}
            text={enterprise.Descricao1}
          />

          <EnterpriseCardCarousel photos={enterprise.Galeria.data} />
        </Stack>
        <Stack>line 2</Stack>
      </Stack>
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
