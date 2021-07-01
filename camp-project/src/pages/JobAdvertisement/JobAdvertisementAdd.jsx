import React from "react";
import * as Yup from "yup";
import { Formik, Form} from "formik";
import { FormField, Button,Icon } from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";

export default function JobAdvertisementAdd() {
  const initialValues = {
    description: "",
    openPosition: "",
    minSalary: 3000,
    maxSalary: 30000,
    applicationDeadline: "",
    isActive: "",
    releaseDate: "",
  };

  const schema = Yup.object({
    jobTitleId: Yup.number().required("İş başlığı boş bırakılamaz."),
    cityId: Yup.number().required("Şehir boş bırakılamaz."),
    workingTimeId: Yup.number().required("Çalışma zamanı boş bırakılamaz."),
    workTypeId: Yup.number().required("Çalışma türü boş bırakılamaz."),
    description: Yup.string().required("Açıklama boş bırakılamaz."),
    openPosition: Yup.string().required("Açık pozisyonlar boş bırakılamaz."),
    minSalary: Yup.number().required("Minimum maaş alanı boş bırakılamaz."),
    maxSalary: Yup.number().required("Maximum maaş alanı boş bırakılamaz."),
    applicationDeadline: Yup.date().required("Son başvuru tarihi boş bırakılamaz."),
    isActive: Yup.boolean().required("İlanın aktiflik durumu boş bırakılamaz." ),
    releaseDate: Yup().date().required("Yayınlanma tarihi boş bırakılamaz."),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <FormField>
              <HrmsTextInput name="description" placeholder="description" />
              <HrmsTextInput name="openPosition" placeholder="openPosition" />
              <HrmsTextInput name="minSalary" placeholder="minSalary" />
              <HrmsTextInput name="maxSalary" placeholder="maxSalary" />
              <HrmsTextInput name="applicationDeadline" placeholder="applicationDeadline" />
              <HrmsTextInput name="isActive" placeholder="isActive" />
              <HrmsTextInput name="cityName" placeholder="cityName" />
              <HrmsTextInput name="companyName" placeholder="companyName" />
              <HrmsTextInput name="titleName" placeholder="titleName" />
              <HrmsTextInput name="workTypeName" placeholder="workTypeName" />
              <HrmsTextInput name="workingTimeName" placeholder="workingTimeName" />
          </FormField>
          <Button type="submit" icon labelPosition="right" color="green">
            Ekle<Icon name="add"></Icon>
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
