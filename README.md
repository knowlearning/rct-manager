* See all studies I am an admin of (or own)
  * Select Study
    * Make taggings for "Study Bucket" tag to make other tags "buckets" for the study
      * Apply taggings for "bucket" tags entities with "context" of study id
    * Use "Study Admin" tag to tag other users as study admins in context of study
      * Only is allowed to be applied to a new user if is the study creator,
        or is a user who already is tagged with "study admin tag" in that context
    * Apply "bucket" tags to whatever you want in study context (if you're an admin)
  * Create new study
    * Basic study config: name, description

* To register "entities" to be put into buckets:
  * Admins on a PILA domain pull the teacher ids from the admin interface
    * add teacher by id to study domain
      * teacher ids are not shown on study domain, but appear as "anonymous" hashes using this seed:
        * teacher_id + study_id + number_of_teachers
