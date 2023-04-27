import Link from "next/link";
import React from "react";

function Terms() {
  return (
    <div>
      <main className="py-20">
        <div className="container text-center">
          <h1 className="font-medium text-6xl mb-2">
            Terms of Service Agreement
          </h1>
          <p className="text-dark-200 ">Last Updated on March 27, 2023</p>
        </div>
      </main>
      <section className="mb-40">
        <div className="container">
          <div className="max-w-[1126px] mx-auto bg-dark-50 p-20 rounded-3xl">
            <div className="mb-20">
              <h2 className="text-center text-5xl">Introduction</h2>
            </div>
            <div className="flex flex-col gap-4 py-6">
              <h4 className="">Welcome to Opine's Terms of Service!</h4>
              <p className="text-dark-300 text-xl">
                The first portion of our Terms of Service is an introduction,
                which is structured like an FAQ and lays out some high-level
                concepts before diving into other terms.
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-4 py-6">
              <h4 className="">What documents make up the TOS?</h4>
              <p className="text-dark-300 text-xl">
                We refer to the Terms of Service as the “TOS”
              </p>
              <p className="text-dark-300 text-xl">
                This page lays out the core of our TOS, but we also have other
                contractual documents that you can think of as additional terms
                for specific topics. Legally speaking, these other documents are
                incorporated by reference as if they were written here and form
                part of the overall TOS. Therefore, you should also review these
                other documents, which can be found at the links below:
              </p>
              <p className="text-dark-300 text-xl">
                <Link className="text-secondary" href="/">
                  Data Processing Agreement
                </Link>
                , which outlines the terms of data processing on your behalf
                through our Services <br />
                <Link className="text-secondary" href="/">
                  Acceptable Use Policy
                </Link>{" "}
                (the “AUP”), which outlines prohibited uses of our Services{" "}
                <br />
                <Link className="text-secondary" href="/">
                  Privacy Policy
                </Link>
                , which outlines how we collect, use, and share data in our
                Websites and Services <br />
                <Link className="text-secondary" href="/">
                  Marketplace Terms of Service
                </Link>
                , which outlines the terms for vendors in the Opine Marketplace
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-4 py-6">
              <h4 className="">Whom does this TOS apply to?</h4>
              <p className="text-dark-300 text-xl">
                When we refer to “Opine” or we use pronouns like “we”, “us” or
                “our”, we are referring to Opine, LLC as well as its parents,
                affiliates and subsidiaries.
              </p>
              <p className="text-dark-300 text-xl">
                When we refer to the “User”, we are talking about you, and we
                will also use words like “you” and “your” to refer to you. Who
                “you” are can get more complicated if you are using our services
                on behalf of a company, organization, or other entity. In that
                case, you are representing to us that you have the authority to
                bind your company, organization, other entity to this TOS and
                that you agree to be legally bound by this TOS on behalf of such
                entity (and “User”, “you”, and “your” then refer to such
                entity). If you aren't sure what this means or whether you are
                authorized to bind your company, organization, or entity to this
                contract, you should ask others in your organization to get
                clarification about authority.**
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-4 py-6">
              <h4 className="">What is the TOS?</h4>
              <p className="text-dark-300 text-xl">
                This TOS is a binding contract between you and Opine, and covers
                all of the offerings, websites, products, services, features,
                content, applications and other things we offer to users like
                you.
              </p>
              <p className="text-dark-300 text-xl">
                We will periodically differentiate between our websites such as{" "}
                <Link className="text-secondary" href="/">
                  opine.cm
                </Link>{" "}
                (which we will refer to collectively as the “Websites”) and all
                of our other services, such as our cloud infrastructure and
                other paid services (which we will refer to collectively as the
                “Services”).
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-4 py-6">
              <h4 className="">When does this TOS apply to me?</h4>
              <p className="text-dark-300 text-xl">
                Now that we have some common language, we want to ensure you
                understand when and how the TOS applies.
              </p>
              <p className="text-dark-300 text-xl">
                First and foremost, you must understand that this is a binding
                legal contract that is required to use our Websites and
                Services. As such, you may only use our Websites and Services if
                you agree that you that have read, understood, and consented to
                be bound by this TOS.
              </p>
              <p className="text-dark-300 text-xl">
                If you sign up for Services or create an account through our
                Websites, this TOS takes effect when you click “I accept” or
                other functionality indicating your acceptance of its terms. If
                you purchase Services through a separate written contract, this
                TOS is incorporated into that contract, whether it is called out
                or not. Regardless of these other methods, when you access or
                use our Websites and Services, this TOS applies and is legally
                binding on you and to your access and use. These are common
                examples, and this paragraph does not necessarily include all
                the other ways you can become bound to this TOS.
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-4 py-6">
              <h4 className="">What happens with disputes under this TOS?</h4>
              <p className="text-dark-300 text-xl">
                One requirement of our TOS is that you must agree to resolve
                disputes arising under this TOS through binding arbitration
                directly between you and DigitalOcean. In arbitration, a neutral
                arbitrator or panel of arbitrators will hear the arguments of
                both sides and decide on disputes in an expedient and
                cost-effective manner. You will still be able to pursue cases in
                court when those cases are for small claims, but all other
                claims will be subject to arbitration.
              </p>
              <p className="text-dark-300 text-xl">
                You should understand that this means neither you nor
                DigitalOcean will have the opportunity to resolve some disputes
                in court before a judge or jury. You will be unable to pursue
                claims in a conventional trial and will not be able to
                participate in a court-based class action or similar proceeding.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="max-w-[1126px] mx-auto py-20">
            <div className="text-center mb-20">
              <h2 className="font-medium text-6xl">
                Terms & Conditions of the TOS
              </h2>
            </div>
            <div className="flex flex-col gap-4 py-6">
              <h4 className="">1. Eligibility & Registration</h4>
              <p className="text-dark-300 text-xl">
                1.1 Before you use our Websites and Services, you must ensure
                that such use is in compliance with all laws, rules and
                regulations applicable to you. Your right to access the Websites
                and Services is revoked to the extent your use thereof is
                prohibited or to the extent our provision thereof conflicts with
                any applicable law, rule or regulation. You are responsible for
                making these determinations before using the Websites and
                Services.
              </p>
              <p className="text-dark-300 text-xl">
                1.2 The Websites and Services are not targeted towards, nor
                intended for use by, anyone under the age of 18. By using the
                Websites and Services, you represent and warrant to us that: (a)
                you are 18 years of age or older; or (b) you otherwise have
                sufficient legal consent, permission and capacity to use the
                Websites and Services in applicable jurisdiction(s) as
                determined by you.
              </p>
              <p className="text-dark-300 text-xl">
                1.3 To access the Services and some features of the Websites,
                you must register for an account (“Account”). When you register
                for your Account, you may be required to provide us with some
                information about yourself, such as your name, email address,
                and a valid form of payment, and you may also provide optional
                information about yourself on a voluntary basis. Account
                information, and our use and disclosure thereof, is subject to
                the{" "}
                <Link href="/" className="text-secondary">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/" className="text-secondary">
                  Data Processing Agreement
                </Link>
              </p>
              <p className="text-dark-300 text-xl">
                1.4 We may, in our sole discretion, refuse to provide or
                continue providing the Websites and Services to any person or
                entity and change eligibility criteria at any time, including if
                you fail to comply with the TOS. We reserve the right to
                deactivate, terminate, prevent access to, disable services for,
                and/or delete any Accounts or access to the Websites and
                Services at any time at our sole discretion.
              </p>
            </div>
            <div className="flex flex-col gap-4 py-6">
              <h4 className="">2. Opine's Proprietary Rights</h4>
              <p className="text-dark-300 text-xl">
                2.1 As between you and Opine, the Websites and Services are
                owned and/or provided by Opine. The names, logos, trademarks,
                trade dress, arrangements, visual interfaces, graphics, design,
                compilation, information, data, computer code (including source
                code or object code), products, software, services, and all
                other elements of the Websites and Services (“Materials”) that
                we provide are protected by intellectual property and other
                laws. All Materials included in the Websites and Services are
                the property of Opine or its third party licensors. You may only
                use the Websites and Services as expressly authorized by us and
                as set forth in this TOS. You shall abide by and maintain all
                intellectual property notices, information, and restrictions
                contained in the Websites and Services. We reserve all rights to
                the Websites and Services not granted expressly in this TOS.
              </p>
              <p className="text-dark-300 text-xl">
                2.2 If you choose to provide input and suggestions regarding
                problems with or proposed modifications or improvements to the
                Websites and Services (“Feedback”) then you hereby grant to us
                an unrestricted, perpetual, irrevocable, non-exclusive,
                fully-paid, royalty-free right to exploit the Feedback in any
                manner and for any purpose, including to improve the Websites
                and Services and create other products and services.
              </p>
              <p className="text-dark-300 text-xl">
                2.3 You grant us permission to include your name, logos, and
                trademarks in our promotional and marketing materials and
                communications.
              </p>
              <p className="text-dark-300 text-xl">
                2.4 Some of the Materials provided by DigitalOcean are licensed
                under one or more open source, Creative Commons, or similar
                licenses (collectively, “Open Source Licenses”). Nothing in this
                TOS prevents, restricts, or is intended to prevent or restrict
                you from obtaining such materials under the applicable Open
                Source Licenses or to limit your use of such materials under
                those Open Source Licenses.
              </p>
              <p className="text-dark-300 text-xl">
                2.5 Subject to your complete and ongoing compliance with this
                TOS and our rights therein, Opine grants you a limited,
                non-exclusive, non-transferable, non-sublicensable, revocable
                license to access and use the Websites and/or Services as
                described in and subject to this TOS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
