* See all studies I am an admin of (or own)
  * Select Study
    * Create new buckets as tags
      * Apply “study bucket tag” to each with value of study id to bind it to the study
    * Use “study admin tag” to tag other users as study admins
      * Only is allowed to be applied to a new user if is the study creator, or is a user who already is tagged with “study admin tag”
    * Apply “bucket tagged tags” to whatever you want (if you're an admin)
  * Create new study
    * Create an object in the domain with basic study config, then tag it as a “study”
      * Basic study config: name, description


* To register "entities" to be put into buckets:
  * Admins on a PILA domain pull the teacher ids from the admin interface
    * add teacher by id to study domain
      * teacher ids are not shown on study domain, but appear as "anonymous" hashes using this seed:
        * teacher_id + study_id + number_of_teachers
