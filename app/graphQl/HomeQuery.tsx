import { gql } from '@apollo/client'

export const GetHomePage = gql`
  query GetHomePage {
    homePages {
      data {
        attributes {
          HomePageSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          CaseShortHead
          CaseLongHead
          CaseStudies {
            Title
            Description
            ReadMoreLink
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          HomeLast {
            Title
            Description
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
            Icon {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          PartnerImage
          TechnologyImage {
            Images {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          Industryshorthead
          IndustryLonghead
          Coustmerhead
          CoustmerImage {
            Images {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          ThirdCard {
            Title
            Description
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          Serviceheading
          Servivecard {
            Title
            Description
            Btnlink
            Logo {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          Banner {
            Heading
            Subheading
            Btntext
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
export const GetWhoWeAre = gql`
  query GetWhoWeAre {
    whoWeAres {
      data {
        attributes {
          WhoWeAre {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Testimonial {
            Heading
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
            RightSection {
              Title
              Subtitle
              Description
              Icon {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
            }
          }
          FouthSection {
            Title
            Description
            ImgTitle1
            ImgTitle2
            ImgTitle3
          }
          Title
          Description
          ThirdSection {
            Title
            Description
            Link
            btntext
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          Heading
          BannerData {
            Title
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GetBringWholeSelf = gql`
  query GetBringWholeSelf {
    bringWholeSelves {
      data {
        attributes {
          BringWholeSelfSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Title3
          Description3
          LastSectionCard {
            Title
            Description
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          Title2
          Description2
          Image2 {
            data {
              attributes {
                name
                url
              }
            }
          }
          Title1
          Description1
          Image1 {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetCareersData = gql`
  query GetCareersData {
    careers {
      data {
        attributes {
          CareerSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Heading
          Subheading
          Title1
          Title2
          Link1
          Link2
          LinkText1
          LinkText2
          SecondHeading
          SecondCards {
            Title
            Description
            Icon {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          BgImage {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetLIfeAtIvoyant = gql`
  query GetLIfeAtIvoyant {
    lIfeAtIvoyants {
      data {
        attributes {
          LifeAtIvoyantSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          LastSection {
            Title
            Description
            BtnLink
            Btntext
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          FourthSection {
            Title
            Description
            BtnLink
            Btntext
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          ForthHeading

          CaroselImages {
            CaroselImages {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          ShortHeading
          LongHeading
          SecondHeading
          SecondSubHeading
          BgImage {
            data {
              attributes {
                name
                url
              }
            }
          }
          SecondSectionCard {
            Title
            Description
            Icon {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GetHowWeDo = gql`
  query GetHowWeDo {
    howWedos {
      data {
        attributes {
          HowWedoSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          LastSection {
            Heading
            Subheading
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          ThirdHeading
          ThirdSubheading
          FourthHeading
          FourthSubheading
          FourthCard {
            Title
            SubTitle
            Description
          }
          SecondHeading
          SecondCard {
            Title
            Description
          }
          Banner {
            Heading
            Subheading
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GetDigitalExprience = gql`
  query GetDigitalExprience {
    digitalExpriences {
      data {
        attributes {
          DigitalExprienceSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          ThirdHeading
          ThirdSubheading
          DigialCard {
            Title
            Description
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          SecondHeading
          SecondImg {
            data {
              attributes {
                name
                url
              }
            }
          }
          DigitalBanner {
            Heading
            Subheading
            Title
            Description
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GetTechnologyTransformation = gql`
  query GetTechnologyTransformation {
    technologyTransformation {
      data {
        attributes {
          TechnologyTransformationSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Heading
          Subheading
          Title
          Description
          ButtonText {
            ButtonText
            ButtonId
          }
          RichText {
            RichText
            SecondSectionImage {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          SecondSectionHeading

          Image {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetTechnologyOperation = gql`
  query GetTechnologyOperation {
    technologyOperation {
      data {
        attributes {
          TechnologyOperationSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Heading
          Subheading
          Title
          Description
          RichTextData
          SecondSectionHeading
          SecondSectionSubheading
          Image {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetFooter = gql`
  query GetFooter {
    footer {
      data {
        attributes {
          Name
          Description
          SocialMediaLinks {
            SocialLink
            SocialIcon {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          Logo {
            data {
              attributes {
                url
                name
                alternativeText
              }
            }
          }
          additional_links {
            data {
              attributes {
                Name
                Url
              }
            }
          }
          navigate_links {
            data {
              attributes {
                Name
                Url
              }
            }
          }
        }
      }
    }
  }
`

export const GetIndustryPage = gql`
  query GetIndustryPage {
    industry {
      data {
        attributes {
          IndustriesSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          ThirdSection {
            Title
            Subtitle
            Btntext
            Btnlink
          }
          Heading
          BgImage {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetIndustriesSlugData = gql`
  query GetIndustriesSlugData {
    industriesCards {
      data {
        attributes {
          IndustrySlugSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Title
          Description
          Image {
            data {
              attributes {
                name
                url
              }
            }
          }
          Link
          Slug
          SecondSectionHeading
          ThirdSectionTitle
          ThirdSection {
            BulletTitles
          }
          SecondSection {
            Title
            Description
          }
          FirstSection {
            Heading
            Subheading
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GetTechnologyPractice = gql`
  query GetTechnologyPractice {
    technologyPractices {
      data {
        attributes {
          TechnologySeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          TechnologyThirdCard {
            Title
            Description
          }
          TechnologySecond {
            Title
            Decsription
            Heading
            BulletPoints {
              BulletPoint
            }
          }
          FirstSection {
            Heading
            Subheading
            Description
            Image {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GetTechnologyPracticeSlug = gql`
  query GetTechnologyPractices {
    technologyPracticeSlugs {
      data {
        attributes {
          TitleMain
          DescriptionMain
          Heading
          Subheading
          Title
          Description
          Title1
          Description1
          BullletText {
            BulletPoints
          }
          Slug
          TechnologySlugSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Images {
            data {
              attributes {
                name
                url
              }
            }
          }
          BgImage {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetPrivacyPolicy = gql`
  query GetPrivacyPolicy {
    privacyPolicies {
      data {
        attributes {
          Heading
          RichContent
          PrivacySeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Image {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetCookiePolicies = gql`
  query GetCookiePolicies {
    cookiePolicies {
      data {
        attributes {
          Heading
          RichContent
          CookieSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Image {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetTermsCondition = gql`
  query GetTermsCondition {
    termsConditons {
      data {
        attributes {
          Heading
          RichContent
          TermsConditionSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Image {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetBlogsPages = gql`
  query GetBlogsPages {
    blogsPages {
      data {
        attributes {
          ShortHeading
          Heading
          Subheading
          TitleLast
          DescriptionLast
          ButtonText
          BlogPageSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          BgImage {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetBlogsSlugs = gql`
  query GetBlogsSlugs {
    blogsSlugs {
      data {
        attributes {
          Categorie {
            name
            value
          }
          Name
          BlogTitle
          SlugLink
          Slug
          Heading
          CreateDate
          RichContent
          Bio
          updatedAt
          CardTitle
          BioImage {
            data {
              attributes {
                name
                url
              }
            }
          }
          BlogsSlugSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          SocialLinks {
            SocialLink
            SocialIcon {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
          BgImageSlug {
            data {
              attributes {
                name
                url
              }
            }
          }
          BgImage {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GetConatcUs = gql`
  query GetConatcUs {
    contact {
      data {
        attributes {
          ClientMail
          DeveloperMail
          ContactUsSeo {
            Title
            MetaTag {
              Title
              Description
            }
            PropertyTag {
              property
              content
            }
          }
          Marked {
            PinLocation
          }
          SocialLinks {
            SocialLink
            SocialIcon {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
